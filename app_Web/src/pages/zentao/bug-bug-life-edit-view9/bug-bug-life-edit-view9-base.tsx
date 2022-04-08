import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import BugService from '@/service/bug/bug-service';
import BugAuthService from '@/authservice/bug/bug-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import BugUIService from '@/uiservice/bug/bug-ui-service';

/**
 * Bug的一生视图基类
 *
 * @export
 * @class BugBugLifeEditView9Base
 * @extends {EditView9Base}
 */
export class BugBugLifeEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BugBugLifeEditView9Base
     */
    protected appDeName: string = 'bug';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BugBugLifeEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BugBugLifeEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof BugBugLifeEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {BugService}
     * @memberof BugBugLifeEditView9Base
     */
    protected appEntityService: BugService = new BugService;

    /**
     * 实体权限服务对象
     *
     * @type BugUIService
     * @memberof BugBugLifeEditView9Base
     */
    public appUIService: BugUIService = new BugUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugBugLifeEditView9Base
	 */
    protected customViewNavContexts: any = {
        'BUGPRODUCT': {
            isRawValue: false,
            value: 'product',
        },
        'BUGPROJECT': {
            isRawValue: false,
            value: 'project',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BugBugLifeEditView9Base
	 */
    protected customViewParams: any = {
        'bugproject': {
            isRawValue: false,
            value: 'project',
        },
        'bugproduct': {
            isRawValue: false,
            value: 'product',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BugBugLifeEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.bug.views.buglifeeditview9.caption',
        srfTitle: 'entities.bug.views.buglifeeditview9.title',
        srfSubTitle: 'entities.bug.views.buglifeeditview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BugBugLifeEditView9Base
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
     * @memberof BugBugLifeEditView9Base
     */
	protected viewtag: string = '114241c3104f51fe267e9708ba41fe29';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BugBugLifeEditView9Base
     */ 
    protected viewName: string = 'BugBugLifeEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BugBugLifeEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BugBugLifeEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BugBugLifeEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'bug',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugBugLifeEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugBugLifeEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof BugBugLifeEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof BugBugLifeEditView9Base
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