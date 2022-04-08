import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { DashboardViewBase } from '@/studio-core';
import TestSuiteService from '@/service/test-suite/test-suite-service';
import TestSuiteAuthService from '@/authservice/test-suite/test-suite-auth-service';
import PortalViewEngine from '@engine/view/portal-view-engine';
import TestSuiteUIService from '@/uiservice/test-suite/test-suite-ui-service';

/**
 * 测试套件数据看板视图视图基类
 *
 * @export
 * @class TestSuiteMainDashboardViewBase
 * @extends {DashboardViewBase}
 */
export class TestSuiteMainDashboardViewBase extends DashboardViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected appDeName: string = 'testsuite';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {TestSuiteService}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected appEntityService: TestSuiteService = new TestSuiteService;

    /**
     * 实体权限服务对象
     *
     * @type TestSuiteUIService
     * @memberof TestSuiteMainDashboardViewBase
     */
    public appUIService: TestSuiteUIService = new TestSuiteUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestSuiteMainDashboardViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'testsuite',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'testsuite',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TestSuiteMainDashboardViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testsuite.views.maindashboardview.caption',
        srfTitle: 'entities.testsuite.views.maindashboardview.title',
        srfSubTitle: 'entities.testsuite.views.maindashboardview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestSuiteMainDashboardViewBase
     */
    protected containerModel: any = {
        view_dashboard: {
            name: 'dashboard',
            type: 'DASHBOARD',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteMainDashboardViewBase
     */
	protected viewtag: string = '1992dba2ce6fc9c7457c3a075575f337';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestSuiteMainDashboardViewBase
     */ 
    protected viewName: string = 'TestSuiteMainDashboardView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestSuiteMainDashboardViewBase
     */
    public engine: PortalViewEngine = new PortalViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestSuiteMainDashboardViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestSuiteMainDashboardViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            dashboard: this.$refs.dashboard,
            keyPSDEField: 'testsuite',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * dashboard 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestSuiteMainDashboardViewBase
     */
    public dashboard_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('dashboard', 'load', $event);
    }

    /** 
     * 数据看板部件刷新状态
     * 
     * @type {boolean}
     * @memberof TestSuiteMainDashboardViewBase
     */
    public state: boolean = true;

    /** 
     * 刷新
     * 
     * @memberof TestSuiteMainDashboardViewBase
     */
    public refresh(args: any){
        this.state = false;
        setTimeout(() => {
            this.state = true;
            this.loadModel();
        }, 0);
    }

}