import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { TreeExpViewBase } from '@/studio-core';
import UserContactService from '@/service/user-contact/user-contact-service';
import UserContactAuthService from '@/authservice/user-contact/user-contact-auth-service';
import TreeExpViewEngine from '@engine/view/tree-exp-view-engine';
import UserContactUIService from '@/uiservice/user-contact/user-contact-ui-service';

/**
 * 用户联系方式树导航视图视图基类
 *
 * @export
 * @class UserContactTreeExpViewBase
 * @extends {TreeExpViewBase}
 */
export class UserContactTreeExpViewBase extends TreeExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserContactTreeExpViewBase
     */
    protected appDeName: string = 'usercontact';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserContactTreeExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserContactTreeExpViewBase
     */
    protected appDeMajor: string = 'listname';

    /**
     * 实体服务对象
     *
     * @type {UserContactService}
     * @memberof UserContactTreeExpViewBase
     */
    protected appEntityService: UserContactService = new UserContactService;

    /**
     * 实体权限服务对象
     *
     * @type UserContactUIService
     * @memberof UserContactTreeExpViewBase
     */
    public appUIService: UserContactUIService = new UserContactUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof UserContactTreeExpViewBase
     */
    isShowDataInfoBar = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserContactTreeExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.usercontact.views.treeexpview.caption',
        srfTitle: 'entities.usercontact.views.treeexpview.title',
        srfSubTitle: 'entities.usercontact.views.treeexpview.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserContactTreeExpViewBase
     */
    protected containerModel: any = {
        view_treeexpbar: { name: 'treeexpbar', type: 'TREEEXPBAR' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof UserContactTreeExpViewBase
     */
	protected viewtag: string = '202eafd29797672a733652aee093b6f9';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserContactTreeExpViewBase
     */ 
    protected viewName:string = "UserContactTreeExpView";


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserContactTreeExpViewBase
     */
    public engine: TreeExpViewEngine = new TreeExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserContactTreeExpViewBase
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserContactTreeExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            treeexpbar: this.$refs.treeexpbar,
            keyPSDEField: 'usercontact',
            majorPSDEField: 'listname',
            isLoadDefault: true,
        });
    }

    /**
     * treeexpbar 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserContactTreeExpViewBase
     */
    public treeexpbar_selectionchange($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'selectionchange', $event);
    }

    /**
     * treeexpbar 部件 activated 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserContactTreeExpViewBase
     */
    public treeexpbar_activated($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('treeexpbar', 'activated', $event);
    }

    /**
     * treeexpbar 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserContactTreeExpViewBase
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
     * @memberof UserContactTreeExpView
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
     * @memberof UserContactTreeExpView
     */
    public opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
    this.$Notice.warning({ title: '错误', desc: '未指定关系视图' });
    }



    /**
     * 视图唯一标识
     *
     * @type {string}
     * @memberof UserContactTreeExpView
     */
    public viewUID: string = 'zentao-user-contact-tree-exp-view';


}