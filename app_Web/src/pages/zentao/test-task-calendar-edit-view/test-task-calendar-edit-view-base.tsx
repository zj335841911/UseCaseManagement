import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import TestTaskService from '@/service/test-task/test-task-service';
import TestTaskAuthService from '@/authservice/test-task/test-task-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import TestTaskUIService from '@/uiservice/test-task/test-task-ui-service';

/**
 * 测试版本编辑视图（日历导航）视图基类
 *
 * @export
 * @class TestTaskCalendarEditViewBase
 * @extends {EditViewBase}
 */
export class TestTaskCalendarEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestTaskCalendarEditViewBase
     */
    protected appDeName: string = 'testtask';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestTaskCalendarEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestTaskCalendarEditViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TestTaskCalendarEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {TestTaskService}
     * @memberof TestTaskCalendarEditViewBase
     */
    protected appEntityService: TestTaskService = new TestTaskService;

    /**
     * 实体权限服务对象
     *
     * @type TestTaskUIService
     * @memberof TestTaskCalendarEditViewBase
     */
    public appUIService: TestTaskUIService = new TestTaskUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestTaskCalendarEditViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'testtask',
        },
        'SRFPARENTKEY': {
            isRawValue: false,
            value: 'testtask',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof TestTaskCalendarEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestTaskCalendarEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.testtask.views.calendareditview.caption',
        srfTitle: 'entities.testtask.views.calendareditview.title',
        srfSubTitle: 'entities.testtask.views.calendareditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestTaskCalendarEditViewBase
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
     * @memberof TestTaskCalendarEditViewBase
     */
	protected viewtag: string = '4ca62d1d57870e4f290ae66f0eff59ac';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestTaskCalendarEditViewBase
     */ 
    protected viewName: string = 'TestTaskCalendarEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestTaskCalendarEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestTaskCalendarEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestTaskCalendarEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testtask',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskCalendarEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskCalendarEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestTaskCalendarEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}