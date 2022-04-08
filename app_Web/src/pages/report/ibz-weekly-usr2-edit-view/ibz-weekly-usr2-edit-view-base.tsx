import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IBZWEEKLYService from '@/service/ibzweekly/ibzweekly-service';
import IBZWEEKLYAuthService from '@/authservice/ibzweekly/ibzweekly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IBZWEEKLYUIService from '@/uiservice/ibzweekly/ibzweekly-ui-service';

/**
 * 周报编辑视图视图基类
 *
 * @export
 * @class IbzWeeklyUsr2EditViewBase
 * @extends {EditViewBase}
 */
export class IbzWeeklyUsr2EditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    protected appDeName: string = 'ibzweekly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    protected appDeKey: string = 'ibz_weeklyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    protected appDeMajor: string = 'ibz_weeklyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IBZWEEKLYService}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    protected appEntityService: IBZWEEKLYService = new IBZWEEKLYService;

    /**
     * 实体权限服务对象
     *
     * @type IBZWEEKLYUIService
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public appUIService: IBZWEEKLYUIService = new IBZWEEKLYUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzWeeklyUsr2EditViewBase
	 */
    protected customViewParams: any = {
        'todaytask': {
            isRawValue: false,
            value: 'thisweektask',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzweekly.views.usr2editview.caption',
        srfTitle: 'entities.ibzweekly.views.usr2editview.title',
        srfSubTitle: 'entities.ibzweekly.views.usr2editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzWeeklyUsr2EditViewBase
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
     * @memberof IbzWeeklyUsr2EditView
     */
    public toolBarModels: any = {
    };



	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
	protected viewtag: string = '6a298e81fa0ad8687b47f7e2f99ff4a0';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzWeeklyUsr2EditViewBase
     */ 
    protected viewName: string = 'IbzWeeklyUsr2EditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzWeeklyUsr2EditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzweekly',
            majorPSDEField: 'ibzweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzWeeklyUsr2EditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}