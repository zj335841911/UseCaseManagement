import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import ActionService from '@/service/action/action-service';
import ActionAuthService from '@/authservice/action/action-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import ActionUIService from '@/uiservice/action/action-ui-service';

/**
 * 添加备注视图基类
 *
 * @export
 * @class ActionOptionViewBase
 * @extends {OptionViewBase}
 */
export class ActionOptionViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */
    protected appDeName: string = 'action';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */
    protected appDeMajor: string = 'comment';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {ActionService}
     * @memberof ActionOptionViewBase
     */
    protected appEntityService: ActionService = new ActionService;

    /**
     * 实体权限服务对象
     *
     * @type ActionUIService
     * @memberof ActionOptionViewBase
     */
    public appUIService: ActionUIService = new ActionUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ActionOptionViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTID': {
            isRawValue: false,
            value: 'objectid',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ActionOptionViewBase
	 */
    protected customViewParams: any = {
        'objecttype': {
            isRawValue: false,
            value: 'OBJECTTYPE',
        },
        'objectid': {
            isRawValue: false,
            value: 'objectid',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof ActionOptionViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ActionOptionViewBase
     */
    protected model: any = {
        srfCaption: 'entities.action.views.optionview.caption',
        srfTitle: 'entities.action.views.optionview.title',
        srfSubTitle: 'entities.action.views.optionview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ActionOptionViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */
	protected viewtag: string = 'd393b56053431c45eb3c8026e4bb2ca1';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ActionOptionViewBase
     */ 
    protected viewName: string = 'ActionOptionView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ActionOptionViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ActionOptionViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ActionOptionViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'action',
            majorPSDEField: 'comment',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionOptionViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionOptionViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ActionOptionViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}