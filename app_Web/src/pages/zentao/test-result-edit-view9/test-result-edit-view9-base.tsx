import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import TestResultService from '@/service/test-result/test-result-service';
import TestResultAuthService from '@/authservice/test-result/test-result-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import TestResultUIService from '@/uiservice/test-result/test-result-ui-service';

/**
 * 测试结果编辑视图视图基类
 *
 * @export
 * @class TestResultEditView9Base
 * @extends {EditView9Base}
 */
export class TestResultEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TestResultEditView9Base
     */
    protected appDeName: string = 'testresult';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof TestResultEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof TestResultEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof TestResultEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {TestResultService}
     * @memberof TestResultEditView9Base
     */
    protected appEntityService: TestResultService = new TestResultService;

    /**
     * 实体权限服务对象
     *
     * @type TestResultUIService
     * @memberof TestResultEditView9Base
     */
    public appUIService: TestResultUIService = new TestResultUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestResultEditView9Base
	 */
    protected customViewNavContexts: any = {
        'VERSION': {
            isRawValue: false,
            value: 'version',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof TestResultEditView9Base
	 */
    protected customViewParams: any = {
        'version': {
            isRawValue: false,
            value: 'version',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof TestResultEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.testresult.views.editview9.caption',
        srfTitle: 'entities.testresult.views.editview9.title',
        srfSubTitle: 'entities.testresult.views.editview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof TestResultEditView9Base
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
     * @memberof TestResultEditView9Base
     */
	protected viewtag: string = '741948bde940303ad18fe33ff1727894';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof TestResultEditView9Base
     */ 
    protected viewName: string = 'TestResultEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof TestResultEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof TestResultEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof TestResultEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'testresult',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestResultEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestResultEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TestResultEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof TestResultEditView9Base
     */
    protected viewMounted(): void {
        if (this.panelState) {
            this.panelState.subscribe((res:any) => {
                if (Object.is(res.tag,'meditviewpanel')) {
                    if (Object.is(res.action,'save')) {
                        this.viewState.next({ tag:'form', action: 'save', data:res.data});
                    }
                    if (Object.is(res.action,'remove')) {
                        this.viewState.next({ tag:'form', action: 'remove', data:res.data});
                    }
                }
            });
        }
    }


}