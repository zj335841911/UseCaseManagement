import { Vue, Component } from 'vue-property-decorator';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { WebLinksAddon } from 'xterm-addon-web-links';
import 'xterm/css/xterm.css';
import './studio-xterm.less';
// 可以监控dom元素样式变更
import { ResizeSensor } from 'css-element-queries';
import { textCopy } from '@/studio-core/service/TextCopy';
import { StudioXtermLinkHandle } from './studio-xterm-link-handle';
import { StudioXtermTheme } from './studio-xterm-theme';
import { sxCache, StudioXtermCache } from './studio-xterm-cache';
import { acc } from '@/studio-core';

/**
 * 终端组件
 *
 * @export
 * @class StudioXTerm
 * @extends {Vue}
 */
@Component({})
export class StudioXTerm extends Vue {
    /**
     * 是否已经初始化
     *
     * @private
     * @memberof StudioXTerm
     */
    private isInit = false;
    /**
     * 终端实例
     *
     * @private
     * @type {Terminal}
     * @memberof StudioXTerm
     */
    private terminal: Terminal = new Terminal({ cols: 100, rows: 50, theme: {} });
    /**
     * 适应容器大小插件
     *
     * @private
     * @type {FitAddon}
     * @memberof StudioXTerm
     */
    private fitAddon: FitAddon = new FitAddon();
    /**
     * 链接处理工具类
     *
     * @private
     * @type {StudioXtermLinkHandle}
     * @memberof StudioXTerm
     */
    private linkHandle?: StudioXtermLinkHandle;
    /**
     * div变化监听
     *
     * @private
     * @type {ResizeSensor}
     * @memberof StudioXTerm
     */
    private resize?: ResizeSensor;
    /**
     * 节点dom
     *
     * @private
     * @type {*}
     * @memberof StudioXTerm
     */
    private terminalRef: any;
    /**
     * 订阅数据流对象
     *
     * @private
     * @type {any[]}
     * @memberof StudioXTerm
     */
    private subs: any[] = [];
    /**
     * 缓存工具类
     *
     * @protected
     * @type {StudioXtermCache}
     * @memberof StudioXTerm
     */
    protected sxCache: StudioXtermCache = sxCache;
    /**
     * 上次是否换行输出
     *
     * @protected
     * @type {boolean}
     * @memberof StudioXTerm
     */
    protected lastIsLn: boolean = false;
    /**
     * 链接内容替换正则
     *
     * @protected
     * @type {RegExp}
     * @memberof StudioXTerm
     */
    protected linkReplaceRegExp: RegExp = new RegExp('___STUDIO___', 'gm');

    /**
     * 组件创建完毕
     *
     * @memberof StudioXTerm
     */
    public created(): void {
        this.sxCache.isShowTerminal = this.$uiState.layoutState.contentBottomShow;
        acc.console((message: any) => sxCache.setCacheItem(message));
        acc.consoleLocal((message: any) => sxCache.setCacheItem(message));
        this.$uiState.on('ui-state-change').subscribe(data => {
            this.sxCache.isShowTerminal = this.$uiState.layoutState.contentBottomShow;
            if (data.key === 'contentBottomShow' && this.$uiState.layoutState.contentBottomShow && this.isInit === false) {
                this.$nextTick(() => this.$nextTick(() => this.initXterm()));
            } else if (data.key === 'theme') {
                this.changeTheme(data.val);
            }
        });
    }

    /**
     * 组件挂载完毕
     *
     * @memberof StudioXTerm
     */
    public mounted(): void {
        if (this.$uiState.layoutState.contentBottomShow) {
            this.initXterm();
        }
    }

    /**
     * 组件销毁
     *
     * @memberof StudioXTerm
     */
    public destroyed(): void {
        if (this.linkHandle) {
            this.linkHandle.unregister();
        }
        if (this.resize) {
            this.resize.detach();
        }
        if (this.terminal) {
            this.terminal.dispose();
        }
        if (this.subs) {
            this.subs.forEach((item: any) => {
                item.unsubscribe();
            });
        }
    }

    /**
     * 变更主题
     *
     * @protected
     * @param {string} themeName
     * @memberof StudioXTerm
     */
    protected changeTheme(themeName: string): void {
        const theme: any = StudioXtermTheme.getThemeConfig(themeName);
        this.terminal.setOption('theme', theme);
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof StudioXTerm
     */
    protected initXterm(): void {
        if (this.$refs.terminal) {
            this.terminalRef = this.$refs.terminal;
            this.terminal.loadAddon(this.fitAddon);
            this.terminal.loadAddon(new WebLinksAddon());
            // 注册自定义链接点击
            this.linkHandle = new StudioXtermLinkHandle(this.terminal);
            this.terminal.open(this.terminalRef);
            this.fitAddon.fit();
            this.monitorResize();

            this.activeConsoleTypeChange();

            this.subs.push(this.sxCache.subMessage().subscribe((message: any) => {
                if (!Object.is(this.sxCache.lastType, message.subtype)) {
                    this.activeConsoleTypeChange();
                } else {
                    this.consoleChange(message.content);
                }
                this.$forceUpdate();
            }));

            this.changeTheme(this.$uiState.getState('theme'));

            this.isInit = true;
        } else {
            setTimeout(() => {
                this.initXterm();
            }, 10);
        }
    }

    /**
     * 命令行区域变更
     *
     * @protected
     * @param {*} message
     * @memberof StudioXTerm
     */
    protected consoleChange(message: any): void {
        if (message && message.indexOf('___STUDIO___') !== -1) {
            message = message.replace(this.linkReplaceRegExp, window.location.origin);
        }
        if (message && message.indexOf('\r') !== -1) {
            if (this.lastIsLn) {
                this.terminal.writeln('');
                this.lastIsLn = false;
            }
            this.terminal.write(message);
        } else {
            if (!this.lastIsLn) {
                this.terminal.writeln('');
                this.lastIsLn = true;
            }
            this.terminal.writeln(message);
        }
        this.$forceUpdate();
    }

    /**
     * 订阅div大小变化
     *
     * @private
     * @memberof StudioXTerm
     */
    private monitorResize(): void {
        let timer: any;
        // 监听大小变化
        this.resize = new ResizeSensor(this.terminalRef, () => {
            if (timer) {
                clearTimeout(timer);
                timer = undefined;
            }
            timer = setTimeout(() => {
                if (this.terminal) {
                    this.fitAddon.fit();
                }
            }, 100);
        });
    }

    /**
     * 红色输出
     *
     * @param {string} str
     * @memberof StudioXTerm
     */
    public writeRed(str: string): void {
        this.terminal.write("\t[33m[31m" + str + "\n");
    }

    /**
     * 不换行刷新输出
     *
     * @param {string} str
     * @memberof StudioXTerm
     */
    public nowrapWrite(str: string): void {
        this.terminal.write(`\r${str}`);
    }

    /**
     * 清理控制台
     *
     * @memberof StudioXTerm
     */
    public clearConsole(): void {
        this.terminal.clear();
        this.terminal.clearSelection();
    }

    /**
     * 清理控制台及缓存
     *
     * @memberof StudioXTerm
     */
    public clearConsoleAndCache(): void {
        this.clearConsole();
        this.sxCache.clearActiveConsole();
    }

    /**
     * 输出类别变更
     *
     * @protected
     * @memberof StudioXTerm
     */
    protected activeConsoleTypeChange(val?: string): void {
        if (val && !Object.is(this.sxCache.activeType, val)) {
            this.sxCache.activeType = val;
            this.$forceUpdate();
        }
        this.clearConsole();
        this.writeActivateTypeMessage();
        this.$nextTick(() => {
            this.terminal.scrollToBottom();
        });
    }

    /**
     * 输出当前类型历史消息
     *
     * @protected
     * @memberof StudioXTerm
     */
    protected writeActivateTypeMessage(): void {
        const arr: any[] = this.sxCache.getCache(this.sxCache.activeType);
        arr.forEach((content: string) => {
            this.consoleChange(content);
        });
    }

    /**
     * 导航至底部
     *
     * @protected
     * @memberof StudioXTerm
     */
    protected toBottom(): void {
        this.terminal.scrollToBottom();
    }

    /**
     * 绘制右键菜单
     *
     * @returns {*}
     * @memberof StudioXTerm
     */
    public renderContextMenu(): any {
        return <ul class='popover-menus'>
            <li v-show={this.terminal.hasSelection()} class='popover-menus-item' on-click={() => textCopy.copy(this.terminal.getSelection())}>
                <div class="icon">
                    <i class="el-icon-document-copy"></i>
                </div>
                <div class="text">
                    拷贝
                </div>
            </li>
            <li class='popover-menus-item' on-click={() => this.terminal.selectAll()}>
                <div class="icon">
                    <i class="el-icon-s-order"></i>
                </div>
                <div class="text">
                    选择全部
                </div>
            </li>
            <li class='popover-menus-item' on-click={() => this.clearConsoleAndCache()}>
                <div class="icon">
                    <i class="fa fa-trash-o"></i>
                </div>
                <div class="text">
                    清除
                </div>
            </li>
        </ul>;
    }

    /**
     * 绘制内容
     *
     * @returns
     * @memberof StudioXTerm
     */
    public render() {
        let selectItems: any[] = [];
        this.sxCache.cache.forEach((val: any, key: any) => {
            selectItems.push(<i-option value={key} key={key}>{key}</i-option>);
        });
        return <context-menu-container class="terminal-context-container">
            <div class="down-arrow" title="最新消息" on-click={() => this.toBottom()}><icon type="md-arrow-dropdown-circle" /></div>
            <context-menu contextMenuStyle={{ width: 'inherit', height: 'inherit' }} renderContent={() => this.renderContextMenu()}>
                <div class="terminal-container" ref="terminal">
                    <div class="terminal-select" v-show={this.sxCache.cache.size > 1}>
                        <i-select disabled={this.sxCache.typeLock} value={this.sxCache.activeType} on-on-change={(val: string) => this.activeConsoleTypeChange(val)} size="small" style="width:100px">
                            {selectItems}
                        </i-select>
                    </div>
                    <div class={{ 'terminal-select-lock': true, 'lock': this.sxCache.typeLock, 'unlock': !this.sxCache.typeLock }} v-show={this.sxCache.cache.size > 1} on-click={() => this.sxCache.changeTypeLock()}>
                        <i title={this.sxCache.typeLock ? '解锁' : '锁定'} class={{ 'ivu-icon': true, 'ivu-icon-ios-unlock': !this.sxCache.typeLock, 'ivu-icon-ios-lock': this.sxCache.typeLock }} />
                    </div>
                </div>
            </context-menu>
        </context-menu-container>;
    }

}
// 默认导出
export default StudioXTerm;