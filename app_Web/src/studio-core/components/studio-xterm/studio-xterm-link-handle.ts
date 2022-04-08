import { Terminal, ILinkMatcherOptions, IViewportRange } from 'xterm';

/**
 * console区链接点击处理
 *
 * @export
 * @class StudioXtermLinkHandle
 */
export class StudioXtermLinkHandle {

    /**
     * console区实例
     *
     * @protected
     * @type {Terminal}
     * @memberof StudioXtermLinkHandle
     */
    protected terminal: Terminal;

    /**
     * 链接事件订阅id
     *
     * @protected
     * @type {number[]}
     * @memberof StudioXtermLinkHandle
     */
    protected linkMatchers: number[] = [];

    /**
     * Creates an instance of StudioXtermLinkHandle.
     * @param {Terminal} terminal
     * @memberof StudioXtermLinkHandle
     */
    constructor(terminal: Terminal) {
        this.terminal = terminal;
        this.register();
    }

    /**
     * 初始化挂载事件
     *
     * @protected
     * @memberof StudioXtermLinkHandle
     */
    protected register(): void {
        if (this.terminal) {
            this.registerItem(new RegExp(/(\[点击处理\])/));
        }
    }

    /**
     * 链接点击处理
     *
     * @protected
     * @param {MouseEvent} event
     * @param {string} str
     * @memberof StudioXtermLinkHandle
     */
    protected handle(event: MouseEvent, str: string): void {
        console.warn('需实现');
    }

    /**
     * 注册链接项
     *
     * @protected
     * @param {RegExp} reg
     * @param {ILinkMatcherOptions} [opt={}]
     * @memberof StudioXtermLinkHandle
     */
    protected registerItem(reg: RegExp, opt: ILinkMatcherOptions = {}): void {
        this.linkMatchers.push(this.terminal.registerLinkMatcher(reg, (e: any, str: any) => this.handle(e, str), { matchIndex: 1, tooltipCallback: (e: any, str: any, local: any) => this.tooltipCallback(e, str, local), ...opt }));
    }

    /**
     * 触发链接提示
     *
     * @protected
     * @param {MouseEvent} e
     * @param {string} url
     * @param {IViewportRange} location
     * @memberof StudioXtermLinkHandle
     */
    protected tooltipCallback(e: MouseEvent, url: string, location: IViewportRange): void {
        console.log(e, '提示');
    }

    /**
     * 卸载事件
     *
     * @protected
     * @memberof StudioXtermLinkHandle
     */
    public unregister(): void {
        if (this.terminal) {
            this.linkMatchers.forEach((num: number) => {
                this.terminal.deregisterLinkMatcher(num);
            });
        }
    }

}