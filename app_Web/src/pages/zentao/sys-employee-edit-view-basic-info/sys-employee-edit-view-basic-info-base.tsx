import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import SysEmployeeAuthService from '@/authservice/sys-employee/sys-employee-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import SysEmployeeUIService from '@/uiservice/sys-employee/sys-employee-ui-service';

/**
 * 人员编辑视图视图基类
 *
 * @export
 * @class SysEmployeeEditViewBasicInfoBase
 * @extends {EditViewBase}
 */
export class SysEmployeeEditViewBasicInfoBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected appDeName: string = 'sysemployee';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected appDeKey: string = 'userid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected appDeMajor: string = 'personname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected appEntityService: SysEmployeeService = new SysEmployeeService;

    /**
     * 实体权限服务对象
     *
     * @type SysEmployeeUIService
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public appUIService: SysEmployeeUIService = new SysEmployeeUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof SysEmployeeEditViewBasicInfoBase
	 */
    protected customViewNavContexts: any = {
        'SYSEMPLOYEE': {
            isRawValue: false,
            value: 'srfuserid',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof SysEmployeeEditViewBasicInfoBase
	 */
    protected customViewParams: any = {
        'sysemployee': {
            isRawValue: false,
            value: 'srfuserid',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected model: any = {
        srfCaption: 'entities.sysemployee.views.editviewbasicinfo.caption',
        srfTitle: 'entities.sysemployee.views.editviewbasicinfo.title',
        srfSubTitle: 'entities.sysemployee.views.editviewbasicinfo.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
	protected viewtag: string = '4eec8bab9a7a03f86c72ec576cc7a70a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */ 
    protected viewName: string = 'SysEmployeeEditViewBasicInfo';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysEmployeeEditViewBasicInfoBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'sysemployee',
            majorPSDEField: 'personname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysEmployeeEditViewBasicInfoBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}