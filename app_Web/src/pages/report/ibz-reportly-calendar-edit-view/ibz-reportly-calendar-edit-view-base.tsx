import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbzReportlyService from '@/service/ibz-reportly/ibz-reportly-service';
import IbzReportlyAuthService from '@/authservice/ibz-reportly/ibz-reportly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbzReportlyUIService from '@/uiservice/ibz-reportly/ibz-reportly-ui-service';

/**
 * 汇报编辑视图视图基类
 *
 * @export
 * @class IbzReportlyCalendarEditViewBase
 * @extends {EditViewBase}
 */
export class IbzReportlyCalendarEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    protected appDeName: string = 'ibzreportly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    protected appDeKey: string = 'ibz_reportlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    protected appDeMajor: string = 'ibz_reportlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyCalendarEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzReportlyService}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    protected appEntityService: IbzReportlyService = new IbzReportlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzReportlyUIService
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public appUIService: IbzReportlyUIService = new IbzReportlyUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzReportlyCalendarEditViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'reportly',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'reportly',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof IbzReportlyCalendarEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzreportly.views.calendareditview.caption',
        srfTitle: 'entities.ibzreportly.views.calendareditview.title',
        srfSubTitle: 'entities.ibzreportly.views.calendareditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyCalendarEditViewBase
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
     * @memberof IbzReportlyCalendarEditViewBase
     */
	protected viewtag: string = 'da1e5d81fc6839e5d3862946971b9eb5';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyCalendarEditViewBase
     */ 
    protected viewName: string = 'IbzReportlyCalendarEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzReportlyCalendarEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzreportly',
            majorPSDEField: 'ibzreportlyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyCalendarEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}