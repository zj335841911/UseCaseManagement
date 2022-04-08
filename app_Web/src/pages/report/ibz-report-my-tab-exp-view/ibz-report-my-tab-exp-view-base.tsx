import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import IbzReportService from '@/service/ibz-report/ibz-report-service';
import IbzReportAuthService from '@/authservice/ibz-report/ibz-report-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzReportUIService from '@/uiservice/ibz-report/ibz-report-ui-service';

/**
 * 汇报分页导航视图（我收到的）视图基类
 *
 * @export
 * @class IbzReportMyTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzReportMyTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected appDeName: string = 'ibzreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected appDeKey: string = 'ibz_dailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected appDeMajor: string = 'ibz_dailyname';

    /**
     * 实体服务对象
     *
     * @type {IbzReportService}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected appEntityService: IbzReportService = new IbzReportService;

    /**
     * 实体权限服务对象
     *
     * @type IbzReportUIService
     * @memberof IbzReportMyTabExpViewBase
     */
    public appUIService: IbzReportUIService = new IbzReportUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzReportMyTabExpViewBase
	 */
    protected customViewNavContexts: any = {
        'IBZREPORT': {
            isRawValue: true,
            value: '0',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof IbzReportMyTabExpViewBase
	 */
    protected customViewParams: any = {
        'ibzreport': {
            isRawValue: true,
            value: '0',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof IbzReportMyTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzreport.views.mytabexpview.caption',
        srfTitle: 'entities.ibzreport.views.mytabexpview.title',
        srfSubTitle: 'entities.ibzreport.views.mytabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzReportMyTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: {
            name: 'tabexppanel',
            type: 'TABEXPPANEL',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzReportMyTabExpViewBase
     */
	protected viewtag: string = 'faea7e2d2427080c2bd6683de726ad8d';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzReportMyTabExpViewBase
     */ 
    protected viewName: string = 'IbzReportMyTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzReportMyTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzReportMyTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzReportMyTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzreport',
            majorPSDEField: 'ibzdailyname',
            isLoadDefault: true,
        });
    }


}