import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import TestReportAuthService from '@/authservice/test-report/test-report-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';

/**
 * 测试报告分页导航视图视图基类
 *
 * @export
 * @class TestReportProjectTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class TestReportProjectTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportProjectTabExpViewBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestReportProjectTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestReportProjectTabExpViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportProjectTabExpViewBase
     */
    protected appEntityService: TestReportService = new TestReportService;

    /**
     * 实体权限服务对象
     *
     * @type TestReportUIService
     * @memberof TestReportProjectTabExpViewBase
     */
    public appUIService: TestReportUIService = new TestReportUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestReportProjectTabExpViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'testreport',
        },
        'BUILDS': {
            isRawValue: false,
            value: 'builds',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestReportProjectTabExpViewBase
	 */
    protected customViewParams: any = {
        'builds': {
            isRawValue: false,
            value: 'builds',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TestReportProjectTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportProjectTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.projecttabexpview.caption',
        srfTitle: 'entities.testreport.views.projecttabexpview.title',
        srfSubTitle: 'entities.testreport.views.projecttabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportProjectTabExpViewBase
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
     * @memberof TestReportProjectTabExpViewBase
     */
	protected viewtag: string = '2dda1b4d7b8bacd3d921f0f0108f2fa1';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportProjectTabExpViewBase
     */ 
    protected viewName: string = 'TestReportProjectTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportProjectTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestReportProjectTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportProjectTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }


}