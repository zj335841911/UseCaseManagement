import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import IbzLibModuleService from '@/service/ibz-lib-module/ibz-lib-module-service';
import IbzLibModuleAuthService from '@/authservice/ibz-lib-module/ibz-lib-module-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import IbzLibModuleUIService from '@/uiservice/ibz-lib-module/ibz-lib-module-ui-service';

/**
 * 用例视图基类
 *
 * @export
 * @class IbzLibModuleCaseTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class IbzLibModuleCaseTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected appDeName: string = 'ibzlibmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {IbzLibModuleService}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected appEntityService: IbzLibModuleService = new IbzLibModuleService;

    /**
     * 实体权限服务对象
     *
     * @type IbzLibModuleUIService
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public appUIService: IbzLibModuleUIService = new IbzLibModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzlibmodule.views.casetreeexpview.caption',
        srfTitle: 'entities.ibzlibmodule.views.casetreeexpview.title',
        srfSubTitle: 'entities.ibzlibmodule.views.casetreeexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: {
            name: 'treeexpbar',
            type: 'TREEEXPBAR',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
	protected viewtag: string = '870bc0de83b0395b5977daca546eed1e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */ 
    protected viewName: string = 'IbzLibModuleCaseTreeExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'ibzlibmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzLibModuleCaseTreeExpViewBase
     */
    public treeexpbar_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'load', $event);
    }

    /**
     * 打开新建数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbzLibModuleCaseTreeExpView
     */
    public newdata(args: any[],fullargs?:any[], params?: any, $event?: any, xData?: any) {
        let localContext:any = null;
        let localViewParam:any =null;
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof IbzLibModuleCaseTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof IbzLibModuleCaseTreeExpView
     */
    public viewUID: string = 'ibiz-ibz-lib-module-case-tree-exp-view';


}