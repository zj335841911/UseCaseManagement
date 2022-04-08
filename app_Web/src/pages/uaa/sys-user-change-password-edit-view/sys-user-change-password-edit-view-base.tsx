import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { EditViewBase } from '@/studio-core';
import SysUserService from '@/service/sys-user/sys-user-service';
import SysUserAuthService from '@/authservice/sys-user/sys-user-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import SysUserUIService from '@/uiservice/sys-user/sys-user-ui-service';

/**
 * 系统用户编辑视图视图基类
 *
 * @export
 * @class SysUserChangePasswordEditViewBase
 * @extends {EditViewBase}
 */
export class SysUserChangePasswordEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected appDeName: string = 'sysuser';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected appDeKey: string = 'userid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected appDeMajor: string = 'personname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {SysUserService}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected appEntityService: SysUserService = new SysUserService;

    /**
     * 实体权限服务对象
     *
     * @type SysUserUIService
     * @memberof SysUserChangePasswordEditViewBase
     */
    public appUIService: SysUserUIService = new SysUserUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof SysUserChangePasswordEditViewBase
	 */
    protected customViewNavContexts: any = {
        'SYSUSER': {
            isRawValue: false,
            value: 'srfuserid',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof SysUserChangePasswordEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysuser.views.changepasswordeditview.caption',
        srfTitle: 'entities.sysuser.views.changepasswordeditview.title',
        srfSubTitle: 'entities.sysuser.views.changepasswordeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUserChangePasswordEditViewBase
     */
    protected containerModel: any = {
        view_toolbar: {
            name: 'toolbar',
            type: 'TOOLBAR',
        },
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };

    /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof SysUserChangePasswordEditView
     */
    public toolBarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: 'entities.sysuser.changepasswordeditviewtoolbar_toolbar.deuiaction1.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.sysuser.changepasswordeditviewtoolbar_toolbar.deuiaction1.tip', iconcls: 'sx-tb-saveandclose', icon: '../sasrfex/images/default/icon_saveandclose.png', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: 'SRFUR__UNIVERSALSAVE', uiaction: { tag: 'SaveAndExit', target: '', class: '' } },

    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */
	protected viewtag: string = 'c3e6eea97c71f24dcf4115546b5ec769';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUserChangePasswordEditViewBase
     */ 
    protected viewName: string = 'SysUserChangePasswordEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUserChangePasswordEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUserChangePasswordEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUserChangePasswordEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'sysuser',
            majorPSDEField: 'personname',
            isLoadDefault: true,
        });
    }

    /**
     * toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUserChangePasswordEditViewBase
     */
    public toolbar_click($event: any, $event2?: any): void {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.toolbar_deuiaction1_click(null, '', $event2);
        }
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUserChangePasswordEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUserChangePasswordEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUserChangePasswordEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.form;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.SaveAndExit(datas, contextJO,paramJO,  $event, xData,this,"SysUser");
    }

    /**
     * 保存并关闭
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof SysUserChangePasswordEditViewBase
     */
    public SaveAndExit(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        const _this: any = this;
        if (xData && xData.saveAndExit instanceof Function) {
            xData.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        } else if (_this.saveAndExit && _this.saveAndExit instanceof Function) {
            _this.saveAndExit().then((response: any) => {
                if (!response || response.status !== 200) {
                    return;
                }
                if(window.parent){
                    window.parent.postMessage([{ ...response.data }],'*');
                }
            });
        }
    }

}