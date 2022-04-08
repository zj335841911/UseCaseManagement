import { Vue, Component, Watch } from 'vue-property-decorator';
import { CreateElement } from 'vue/types/umd';
import { Subject, Observable } from 'rxjs';
import { Util } from '@/utils';
import { on } from '@/utils/dom/dom';
import store from '@/store';
import i18n from '@/locale';
import './studio-drawer.less';

/**
 * 模态承载组件
 *
 * @export
 * @class StudioDrawer
 * @extends {Vue}
 */
@Component({})
export class StudioDrawer extends Vue {
    /**
     * 已呈现视图列表
     *
     * @protected
     * @type {any[]}
     * @memberof StudioDrawer
     */
    protected viewList: any[] = [];

    /**
     * 为了视觉效果，当前列表为显示的视图
     *
     * @protected
     * @type {any[]}
     * @memberof StudioDrawer
     */
    protected showViewList: any[] = [];

    /**
     * 关闭模态数据传递
     *
     * @protected
     * @type {*}
     * @memberof StudioDrawer
     */
    protected closeModalData: any;

    /**
     * 待关闭视图
     *
     * @protected
     * @type {any[]}
     * @memberof StudioDrawer
     */
    protected toBeClosedViews: any[] = [];

    /**
     * 是否展示模态
     *
     * @protected
     * @type {boolean}
     * @memberof StudioDrawer
     */
    protected isShow: boolean = false;

    /**
     * 监控模态展示状态变更
     *
     * @memberof StudioDrawer
     */
    @Watch('isShow')
    public isShowWatch(newVal: boolean, oldVal: boolean): void {
        if (newVal !== oldVal && newVal === false) {
            this.zIndex -= 1;
            this.$store.commit('updateZIndex', this.zIndex);
        }
    }

    /**
     * 视图层级
     *
     * @protected
     * @type {number}
     * @memberof StudioDrawer
     */
    protected zIndex: number = 100;

    /**
     * 当前激活项下标
     *
     * @protected
     * @type {number}
     * @memberof StudioDrawer
     */
    protected activeIndex: number = 0;

    /**
     * 组件创建完毕
     *
     * @protected
     * @memberof StudioDrawer
     */
    protected created(): void {
        on(document, 'keydown', ($event: KeyboardEvent) => {
            if ($event && $event.keyCode === 27 && this.viewList.length > 0) {
                const zIndex = this.$store.getters.getZIndex();
                if (zIndex !== this.zIndex) {
                    return;
                }
                this.refCloseView(this.viewList[this.viewList.length - 1], this.viewList.length - 1);
            }
        });
    }

    /**
     * 使用实例方法关闭视图
     *
     * @protected
     * @param {*} view
     * @param {number} i
     * @returns {*}
     * @memberof StudioDrawer
     */
    protected refCloseView(view: any, i: number): any {
        const ref: any = this.$refs[view.viewname + i];
        if (ref) {
            const appview = this.$store.getters['viewaction/getAppView'](ref.viewtag);
            if (appview && appview.viewdatachange) {
                const title: any = this.$t('app.tabpage.sureclosetip.title');
                const contant: any = this.$t('app.tabpage.sureclosetip.content');
                this.$Modal.confirm({
                    title: title,
                    content: contant,
                    onOk: () => {
                        this.$store.commit('viewaction/setViewDataChange', {
                            viewtag: ref.viewtag,
                            viewdatachange: false,
                        });
                        ref.closeView();
                    },
                });
            } else {
                ref.closeView();
            }
        }
    }

    /**
     * 打开模态视图
     *
     * @param {*} [param={}]
     * @returns {Promise<any>}
     * @memberof StudioDrawer
     */
    public openModal(param: any = {}): Promise<any> {
        return new Promise((resolve: (res: any) => void) => {
            if (!this.isShow) {
                const zIndex: number = this.$store.getters.getZIndex();
                if (zIndex) {
                    this.zIndex = zIndex + 1;
                    this.$store.commit('updateZIndex', this.zIndex);
                }
                setTimeout(() => (this.isShow = true), 50);
            }
            this.viewList.push(Object.assign(Util.deepCopy(param), { resolve }));
            this.showViewList.push(this.viewList[this.viewList.length - 1]);
            this.activeIndex = this.viewList.length - 1;
        });
    }

    /**
     * 关闭模态视图
     *
     * @memberof StudioDrawer
     */
    public closeView(item: any): void {
        if (this.closeModalData && this.closeModalData.length > 0 && this.closeModalData[0] !== undefined) {
            item.resolve({ ret: 'OK', datas: this.closeModalData });
        } else {
            item.resolve({ ret: '', datas: [] });
        }
        this.viewList.pop();
        this.activeIndex = this.viewList.length - 1;
        setTimeout(() => {
            this.showViewList.pop();
        }, 300);
        if (this.toBeClosedViews.length > 0) {
            const view: any = this.toBeClosedViews[this.toBeClosedViews.length - 1];
            const viewname: string = view.viewname;
            const i: number = view.index;
            this.toBeClosedViews.pop();
            this.refCloseView({ viewname }, i);
        }
    }

    /**
     * 关闭指定下标之前的所有页面
     *
     * @protected
     * @memberof StudioDrawer
     */
    protected closeByIndex(i: number): void {
        this.toBeClosedViews = [];
        for (let index = i + 1; index < this.viewList.length - 1; index++) {
            this.toBeClosedViews.push({
                viewname: this.viewList[index].viewname,
                index: index,
            });
        }
        this.refCloseView(this.viewList[this.viewList.length - 1], this.viewList.length - 1);
    }

    /**
     * 绘制标题
     *
     * @protected
     * @returns {*}
     * @memberof StudioDrawer
     */
    protected renderHeader(): any {
        return (
            <div class="studio-drawer-header">
                <div class="studio-drawer-breadcrumb">
                    <div class="studio-drawer-back" on-click={() => this.closeByIndex(this.viewList.length - 1)}>
                        <icon type="ios-arrow-back" />
                        返回
                    </div>
                    {this.showViewList.map((item, i) => {
                        const ref: any = this.$refs[item.viewname + i];
                        if (!ref) {
                            setTimeout(() => {
                                this.$forceUpdate();
                            }, 300);
                            return;
                        }
                        return (
                            <span key={i}>
                                {i !== 0 ? <span class="studio-drawer-breadcrumb-item-separator">&gt;</span> : null}
                                <span
                                    class={{ text: true, active: i === this.showViewList.length - 1 }}
                                    on-click={() => {
                                        if (this.showViewList.length === i + 1) {
                                            return;
                                        }
                                        this.closeByIndex(i);
                                    }}
                                >
                                    {this.$t(ref.viewCaption)}
                                </span>
                            </span>
                        );
                    })}
                </div>
                {this.viewList.length > 1 ? (
                    <poptip
                        class="close"
                        confirm
                        placement="left-start"
                        title="确认关闭所有界面?"
                        on-on-ok={() => this.closeByIndex(-1)}
                    >
                        <icon title="关闭所有视图" type="md-close" />
                    </poptip>
                ) : (
                    <div class="close" on-click={() => this.closeByIndex(-1)}>
                        <icon title="关闭所有视图" type="md-close" />
                    </div>
                )}
            </div>
        );
    }

    /**
     * 绘制视图
     *
     * @protected
     * @param {CreateElement} h
     * @returns {*}
     * @memberof StudioDrawer
     */
    protected renderViews(h: CreateElement): any {
        return this.showViewList.map((view: any, i: number) => {
            try {
                const props: any = {
                    openMode: 'MODAL',
                    viewUsage: 2,
                    viewDefaultUsage: false,
                    viewdata: JSON.stringify(view.viewdata),
                    viewparam: JSON.stringify(view.viewparams),
                };
                const style: any = { 'z-index': i + 1 };
                return (
                    <div class={{ 'studio-drawer-item': true, active: this.activeIndex === i }}>
                        {h(view.viewname, {
                            key: view.viewname + i,
                            ref: view.viewname + i,
                            style,
                            props,
                            on: {
                                viewdataschange: (data: any) => {
                                    this.closeModalData = data;
                                },
                                close: () => {
                                    if (this.viewList.length - 1 < i) {
                                        return;
                                    }
                                    if (this.viewList.length === 1) {
                                        this.isShow = false;
                                        setTimeout(() => this.closeView(view), 500);
                                    } else {
                                        this.closeView(view);
                                    }
                                },
                                viewModelChange: () => {
                                    this.$forceUpdate();
                                },
                            },
                        })}
                    </div>
                );
            } catch (err) {
                console.warn('上飘窗打开视图参数转换异常', err);
            }
        });
    }

    /**
     * 绘制模态内容
     *
     * @returns {*}
     * @memberof StudioDrawer
     */
    public render(h: CreateElement): any {
        return (
            <div
                class="studio-drawer"
                key="studio-drawer"
                style={{ 'z-index': this.zIndex, 'margin-top': this.isShow ? '0px' : '-100vh' }}
            >
                {this.renderHeader()}
                <div
                    class="studio-drawer-content"
                    style={`transform: translateX(${
                        this.activeIndex > 0 ? this.activeIndex * -100 : 0
                    }%) translateZ(0px);`}
                >
                    {this.renderViews(h)}
                </div>
            </div>
        );
    }
}

/**
 * 模态
 *
 * @export
 * @class StudioDrawerController
 */
export class StudioDrawerController {
    /**
     * 唯一实例
     *
     * @protected
     * @static
     * @type {StudioDrawerController}
     * @memberof StudioDrawerController
     */
    protected static readonly instance: StudioDrawerController = new StudioDrawerController();

    /**
     * 模态承载容器
     *
     * @protected
     * @type {HTMLDivElement}
     * @memberof StudioDrawerController
     */
    protected modalContainer: HTMLDivElement;

    /**
     * Vue实例
     *
     * @protected
     * @type {*}
     * @memberof StudioDrawerController
     */
    protected vueInstance!: any;

    /**
     * Creates an instance of StudioDrawerController.
     * @memberof StudioDrawerController
     */
    constructor() {
        this.modalContainer = document.createElement('div');
        document.body.appendChild(this.modalContainer);
    }

    /**
     * 初始化
     *
     * @protected
     * @memberof StudioDrawerController
     */
    protected init(): void {
        this.vueInstance = new Vue({
            i18n,
            store,
            render: (h: any) => h(StudioDrawer, { ref: 'StudioDrawer' }),
        }).$mount(this.modalContainer);
    }

    /**
     * 顶部抽屉模式打开视图
     *
     * @param {{ viewname: string, title: string, width?: number, height?: number }} view 视图
     * @param {*} [viewParam={}] 视图参数
     * @param {any[]} deResParameters 关系实体参数对象
     * @param {any[]} parameters 当前应用视图参数对象
     * @param {any[]} args 多项数据
     * @param {*} [data={}] 行为参数
     * @returns {Observable<any>}
     * @memberof StudioDrawerController
     */
    public openDrawer(
        view: { viewname: string; title: string; width?: number; height?: number; placement?: string },
        context: any,
        data: any = {}
    ): Observable<any> {
        const subject: Subject<any> = new Subject();
        this.getVueInstance()
            .$refs.StudioDrawer.openModal({ ...view, viewdata: Util.deepCopy(context), viewparams: data })
            .then((data: any) => {
                subject.next(data);
                subject.complete();
                subject.unsubscribe();
            });
        return subject.asObservable();
    }

    /**
     * 获取Vue容器实例
     *
     * @protected
     * @returns {*}
     * @memberof StudioDrawerController
     */
    protected getVueInstance(): any {
        if (!this.vueInstance) {
            this.init();
        }
        return this.vueInstance;
    }
}

// 模态服务控制器实例
export const studioDrawerController: StudioDrawerController = new StudioDrawerController();
