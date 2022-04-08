import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import CaseAuthService from '@/authservice/case/case-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import CaseUIService from '@/uiservice/case/case-ui-service';

/**
 * 执行结果视图基类
 *
 * @export
 * @class CaseTestTaskExcEditViewBase
 * @extends {EditViewBase}
 */
export class CaseTestTaskExcEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTestTaskExcEditViewBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof CaseTestTaskExcEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof CaseTestTaskExcEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTestTaskExcEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseTestTaskExcEditViewBase
     */
    protected appEntityService: CaseService = new CaseService;

    /**
     * 实体权限服务对象
     *
     * @type CaseUIService
     * @memberof CaseTestTaskExcEditViewBase
     */
    public appUIService: CaseUIService = new CaseUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseTestTaskExcEditViewBase
	 */
    protected customViewNavContexts: any = {
        'TASK': {
            isRawValue: false,
            value: 'task',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof CaseTestTaskExcEditViewBase
	 */
    protected customViewParams: any = {
        'task': {
            isRawValue: false,
            value: 'task',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof CaseTestTaskExcEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof CaseTestTaskExcEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.case.views.testtaskexceditview.caption',
        srfTitle: 'entities.case.views.testtaskexceditview.title',
        srfSubTitle: 'entities.case.views.testtaskexceditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof CaseTestTaskExcEditViewBase
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
     * @memberof CaseTestTaskExcEditViewBase
     */
	protected viewtag: string = '946ccf2f81dab9bfaf2bd841df90f209';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTestTaskExcEditViewBase
     */ 
    protected viewName: string = 'CaseTestTaskExcEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof CaseTestTaskExcEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof CaseTestTaskExcEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof CaseTestTaskExcEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'case',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestTaskExcEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestTaskExcEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTestTaskExcEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}