import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import UserService from '@/service/user/user-service';
import UserAuthService from '@/authservice/user/user-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import UserUIService from '@/uiservice/user/user-ui-service';

/**
 * 用户视图基类
 *
 * @export
 * @class UserTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class UserTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserTreeExpViewBase
     */
    protected appDeName: string = 'user';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserTreeExpViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {UserService}
     * @memberof UserTreeExpViewBase
     */
    protected appEntityService: UserService = new UserService;

    /**
     * 实体权限服务对象
     *
     * @type UserUIService
     * @memberof UserTreeExpViewBase
     */
    public appUIService: UserUIService = new UserUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof UserTreeExpViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.user.views.treeexpview.caption',
        srfTitle: 'entities.user.views.treeexpview.title',
        srfSubTitle: 'entities.user.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof UserTreeExpViewBase
     */
	protected viewtag: string = 'e2f8bc0ff75f204383d2a5c15117b476';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserTreeExpViewBase
     */ 
    protected viewName:string = "UserTreeExpView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserTreeExpViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'user',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserTreeExpViewBase
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
     * @memberof UserTreeExpView
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
     * @memberof UserTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof UserTreeExpView
     */
    public viewUID: string = 'zentao-user-tree-exp-view';


}