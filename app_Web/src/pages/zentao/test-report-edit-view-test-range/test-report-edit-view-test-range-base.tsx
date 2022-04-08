import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import TestReportService from '@/service/test-report/test-report-service';
import TestReportAuthService from '@/authservice/test-report/test-report-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import TestReportUIService from '@/uiservice/test-report/test-report-ui-service';

/**
 * 测试报告编辑视图视图基类
 *
 * @export
 * @class TestReportEditView_TestRangeBase
 * @extends {EditViewBase}
 */
export class TestReportEditView_TestRangeBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appDeName: string = 'testreport';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {TestReportService}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected appEntityService: TestReportService = new TestReportService;

    /**
     * 实体权限服务对象
     *
     * @type TestReportUIService
     * @memberof TestReportEditView_TestRangeBase
     */
    public appUIService: TestReportUIService = new TestReportUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof TestReportEditView_TestRangeBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestReportEditView_TestRangeBase
     */
    protected model: any = {
        srfCaption: 'entities.testreport.views.editview_testrange.caption',
        srfTitle: 'entities.testreport.views.editview_testrange.title',
        srfSubTitle: 'entities.testreport.views.editview_testrange.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestReportEditView_TestRangeBase
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
     * @memberof TestReportEditView_TestRangeBase
     */
	protected viewtag: string = '5918176ed83c3a3809e0b822a2823d7d';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestReportEditView_TestRangeBase
     */ 
    protected viewName: string = 'TestReportEditView_TestRange';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestReportEditView_TestRangeBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestReportEditView_TestRangeBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestReportEditView_TestRangeBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testreport',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestReportEditView_TestRangeBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}