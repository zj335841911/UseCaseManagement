import { ExpControlBase } from './ExpControlBase';

/**
 * 数据卡片导航视图
 *
 * @export
 * @class TreeeExpBarControlBase
 * @extends {ExpControlBase}
 */
export class TreeExpBarControlBase extends ExpControlBase {
    /**
     * 过滤值
     *
     * @type {string}
     * @memberof TreeExpBarControlBase
     */
    public srfnodefilter: string = '';

    /**
     * 刷新标识
     *
     * @public
     * @type {number}
     * @memberof TreeExpBarControlBase
     */
    public counter: number = 0;

    /**
     * 是否加载默认关联视图
     *
     * @public
     * @type {boolean}
     * @memberof TreeExpBarControlBase
     */
    public istLoadDefaultRefView: boolean = false;

    /**
     * 分割宽度
     *
     * @type {number}
     * @memberof TreeExpBarControlBase
     */
    public split: number = 0.15;

    /**
     * split值变化事件
     *
     * @memberof TreeExpBarControlBase
     */
    public onSplitChange() {
        if (this.split) {
            this.$store.commit('setViewSplit', { viewUID: this.viewUID, viewSplit: this.split });
        }
    }

    /**
     * 树加载完成
     *
     * @param {any[]} args
     * @param {string} [tag]
     * @param {*} [$event2]
     * @returns {void}
     * @memberof TreeExpBarControlBase
     */
    public treeexpbar_load(args: any[], tag?: string, $event2?: any): void {
        this.$emit('load', args);
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TreeExpBarControlBase
     */
    public ctrlCreated() {
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.istLoadDefaultRefView = false;
                this.viewState.next({ tag: 'treeexpbar_tree', action: action, data: data });
            });
        }
    }

    /**
     * 执行搜索
     *
     * @memberof TreeExpBarControlBase
     */
    public onSearch(): void {
        if (!this.viewState) {
            return;
        }
        this.istLoadDefaultRefView = false;
        this.viewState.next({ tag: 'treeexpbar_tree', action: 'filter', data: { srfnodefilter: this.srfnodefilter } });
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TreeExpBarControlBase
     */
    public ctrlDestroyed() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        super.ctrlDestroyed();
    }

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof TreeExpBarControlBase
     */
    public onViewDatasChange($event: any): void {
        this.$emit('selectionchange', $event);
    }

    /**
     * 视图数据变化
     *
     * @param {*} $event
     * @memberof TreeExpBarControlBase
     */
    public onDrViewDatasChange($event: any): void {
        this.viewState.next({ tag: 'treeexpbar_tree', action: 'refresh_parent', data: {} });
    }

    /**
     * 视图数据被激活
     *
     * @param {*} $event
     * @memberof TreeExpBarControlBase
     */
    public viewDatasActivated($event: any): void {
        this.$emit('activated', $event);
    }

    /**
     * 树导航选中
     *
     * @param {any []} args
     * @param {string} [tag]
     * @param {*} [$event2]
     * @returns {void}
     * @memberof TreeExpBarControlBase
     */
    public treeexpbar_selectionchange(args: any[], tag?: string, $event2?: any): void {
        if (args.length === 0) {
            return;
        }
        const arg: any = args[0];
        if (!arg.id) {
            return;
        }
        const nodetype = arg.id.split(';')[0];
        const refview = this.getExpItemView({ nodetype: nodetype });
        if (!refview) {
            return;
        }
        let tempViewparam: any = {};
        let tempContext: any = {};
        if (arg && arg.navfilter) {
            this.counter += 1;
            Object.defineProperty(tempViewparam, arg.navfilter, {
                value: arg.srfkey,
                writable: true,
                enumerable: true,
                configurable: true,
            });
            Object.assign(tempContext, { srfcounter: this.counter });
        }
        Object.assign(tempContext, JSON.parse(JSON.stringify(this.context)));
        if (arg.srfappctx) {
            Object.assign(tempContext, JSON.parse(JSON.stringify(arg.srfappctx)));
        }
        // 计算导航上下文
        if (arg && arg.navigateContext && Object.keys(arg.navigateContext).length > 0) {
            let tempData: any = arg.curData ? JSON.parse(JSON.stringify(arg.curData)) : {};
            Object.assign(tempData, arg);
            let _context = this.$util.computedNavData(tempData, tempContext, tempViewparam, arg.navigateContext);
            Object.assign(tempContext, _context);
        }
        if (arg.srfparentdename) {
            Object.assign(tempContext, { srfparentdename: arg.srfparentdename });
        }
        if (arg.srfparentkey) {
            Object.assign(tempContext, { srfparentkey: arg.srfparentkey });
        }
        // 计算导航参数
        if (arg && arg.navigateParams && Object.keys(arg.navigateParams).length > 0) {
            let tempData: any = arg.curData ? JSON.parse(JSON.stringify(arg.curData)) : {};
            Object.assign(tempData, arg);
            let _params = this.$util.computedNavData(tempData, tempContext, tempViewparam, arg.navigateParams);
            Object.assign(tempViewparam, _params);
            this.counter += 1;
            Object.assign(tempContext, { srfcounter: this.counter });
        }
        this.selection = {};
        Object.assign(this.selection, { view: { viewname: refview.viewname } });
        Object.assign(this.selection, { viewparam: tempViewparam, context: tempContext });
        this.$forceUpdate();
    }

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TreeExpBarControlBase
     */
    public getExpItemView(arg: any = {}): any {}
}
