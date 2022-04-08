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
 * @class IbzReportlyReportlyDetailEditViewBase
 * @extends {EditViewBase}
 */
export class IbzReportlyReportlyDetailEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    protected appDeName: string = 'ibzreportly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    protected appDeKey: string = 'ibz_reportlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    protected appDeMajor: string = 'ibz_reportlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzReportlyService}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    protected appEntityService: IbzReportlyService = new IbzReportlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbzReportlyUIService
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    public appUIService: IbzReportlyUIService = new IbzReportlyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzreportly.views.reportlydetaileditview.caption',
        srfTitle: 'entities.ibzreportly.views.reportlydetaileditview.title',
        srfSubTitle: 'entities.ibzreportly.views.reportlydetaileditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzReportlyReportlyDetailEditViewBase
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
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
	protected viewtag: string = 'd6d6a7c24897b28611fb32791d4d1a4a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */ 
    protected viewName: string = 'IbzReportlyReportlyDetailEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzReportlyReportlyDetailEditViewBase
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
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzReportlyReportlyDetailEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}