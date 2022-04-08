import { Component, Vue, Prop } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import { StudioActionController } from '../../core/StudioActionController';
import interact from 'interactjs';
import './view-config-actions.less';

/**
 * 视图快捷配置
 *
 * @export
 * @class ViewConfigActions
 * @extends {Vue}
 */
@Component({})
export class ViewConfigActions extends Vue {
    /**
     * 视图名称
     *
     * @type {string}
     * @memberof ViewConfigActions
     */
    @Prop({ default: '' })
    public viewName!: string;

    /**
     * 视图标题
     *
     * @type {string}
     * @memberof ViewConfigActions
     */
    @Prop({ default: '' })
    public viewTitle!: string;

    /**
     * 视图配置信息
     *
     * @protected
     * @type {*}
     * @memberof ViewConfigActions
     */
    protected config: any = {};

    /**
     * 鼠标是否悬浮在行为组上
     *
     * @protected
     * @type {boolean}
     * @memberof ViewConfigActions
     */
    protected actinsIsHover: boolean = false;

    /**
     * 配置平台操作控制器
     *
     * @type {StudioActionController}
     * @memberof ViewConfigActions
     */
    public sdc: StudioActionController = StudioActionController.getInstance();

    /**
     * 触发配置
     *
     * @protected
     * @memberof AppLayout
     */
    protected configView(): void {
        this.sdc.openStudioConfigView(this.viewName);
    }

    /**
     * 新建issues
     *
     * @protected
     * @memberof AppLayout
     */
    protected createIssues(): void {
        this.sdc.createdIssues(this.viewName);
    }

    /**
     * 拷贝配置路径
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async copyConfigUrl(): Promise<void> {
        const judge = this.sdc.copyStudioConfigUrl(this.viewName);
        if (judge) {
            this.$Message.success('拷贝配置路径成功');
        } else {
            this.$Message.error('拷贝失败，可能浏览器不支持!');
        }
    }

    /**
     * 拷贝视图文件名称
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async copyViewFileName(): Promise<void> {
        const judge = this.sdc.copyViewFileName(this.viewName);
        if (judge) {
            this.$Message.success('拷贝视图文件名称成功');
        } else {
            this.$Message.error('拷贝失败，可能浏览器不支持!');
        }
    }

    /**
     * 组件创建完毕
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ViewConfigActions
     */
    protected async created(): Promise<void> {
        if (Environment.devMode) {
            this.config = await this.sdc.getConfig(this.viewName);
        }
    }

    /**
     * 鼠标移入
     *
     * @protected
     * @memberof ViewConfigActions
     */
    protected mouseenter(): void {
        this.actinsIsHover = true;
    }

    /**
     * 鼠标移出
     *
     * @protected
     * @memberof ViewConfigActions
     */
    protected mouseleave(): void {
        this.actinsIsHover = false;
    }

    /**
     * 组件加载完毕
     *
     * @memberof ViewConfigActions
     */
    public mounted(): void {
        if (this.$refs.container) {
            interact(this.$refs.container as any).draggable({
                inertia: true,
                modifiers: [
                    interact.modifiers.restrictRect({
                        restriction: 'parent',
                        endOnly: true,
                    }),
                ],
                autoScroll: true,
                listeners: {
                    move: (event: any) => {
                        const target = event.target;
                        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                        target.setAttribute('data-x', x);
                        target.setAttribute('data-y', y);
                    },
                },
            });
        }
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof ViewConfigActions
     */
    public render(): any {
        return Environment.devMode ? (
            <div v-show={this.sdc.isShowTool} class={{ 'studio-config-container': true, hover: this.actinsIsHover }}>
                <div
                    ref="container"
                    class="studio-config-actions"
                    on-mouseenter={() => this.mouseenter()}
                    on-mouseleave={() => this.mouseleave()}
                >
                    <div class="title">
                        {this.config?.memo && !Object.is(this.config?.memo, '') ? (
                            <icon title={this.config.memo} type="ios-bulb-outline" />
                        ) : null}
                        {this.viewTitle}
                        <i-button
                            title="拷贝视图文件名称"
                            type="text"
                            icon="ios-copy"
                            ghost
                            on-click={() => this.copyViewFileName()}
                        ></i-button>
                    </div>
                    <div class="actions">
                        <button-group>
                            <i-button
                                title="进入当前视图配置界面"
                                type="text"
                                icon="ios-hammer"
                                ghost
                                on-click={() => this.configView()}
                            >
                                配置
                            </i-button>
                            <i-button
                                title="复制配置界面路径"
                                type="text"
                                icon="ios-share-alt"
                                ghost
                                on-click={() => this.copyConfigUrl()}
                            >
                                分享配置
                            </i-button>
                            <i-button
                                title="建立当前界面的issues"
                                type="text"
                                icon="ios-browsers"
                                ghost
                                on-click={() => this.createIssues()}
                            >
                                新建issues
                            </i-button>
                        </button-group>
                    </div>
                    <div class="drag-handle" ref="dragHandle">
                        <svg
                            viewBox="64 64 896 896"
                            data-icon="drag"
                            width="18px"
                            height="18px"
                            fill="currentColor"
                            aria-hidden="true"
                            focusable="false"
                            class=""
                        >
                            <path d="M909.3 506.3L781.7 405.6a7.23 7.23 0 0 0-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 0 0-11.3 0L405.6 242.3a7.23 7.23 0 0 0 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 0 0 .1-11.4z"></path>
                        </svg>
                    </div>
                </div>
                <div class="view-show-container"></div>
            </div>
        ) : null;
    }
}
