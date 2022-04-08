import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import IbzPlanTempletService from '@/service/ibz-plan-templet/ibz-plan-templet-service';
import IbzPlanTempletAuthService from '@/authservice/ibz-plan-templet/ibz-plan-templet-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import IbzPlanTempletUIService from '@/uiservice/ibz-plan-templet/ibz-plan-templet-ui-service';

/**
 * 产品计划模板选项操作视图视图基类
 *
 * @export
 * @class IbzPlanTempletOptionViewBase
 * @extends {OptionViewBase}
 */
export class IbzPlanTempletOptionViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzPlanTempletOptionViewBase
     */
    protected appDeName: string = 'ibzplantemplet';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzPlanTempletOptionViewBase
     */
    protected appDeKey: string = 'ibz_plantempletid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzPlanTempletOptionViewBase
     */
    protected appDeMajor: string = 'ibz_plantempletname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbzPlanTempletOptionViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbzPlanTempletService}
     * @memberof IbzPlanTempletOptionViewBase
     */
    protected appEntityService: IbzPlanTempletService = new IbzPlanTempletService;

    /**
     * 实体权限服务对象
     *
     * @type IbzPlanTempletUIService
     * @memberof IbzPlanTempletOptionViewBase
     */
    public appUIService: IbzPlanTempletUIService = new IbzPlanTempletUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzPlanTempletOptionViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzPlanTempletOptionViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzplantemplet.views.optionview.caption',
        srfTitle: 'entities.ibzplantemplet.views.optionview.title',
        srfSubTitle: 'entities.ibzplantemplet.views.optionview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzPlanTempletOptionViewBase
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
     * @memberof IbzPlanTempletOptionViewBase
     */
	protected viewtag: string = '86c8826366681d0e9ed5d6c3fc9908fd';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzPlanTempletOptionViewBase
     */ 
    protected viewName: string = 'IbzPlanTempletOptionView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzPlanTempletOptionViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzPlanTempletOptionViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzPlanTempletOptionViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibzplantemplet',
            majorPSDEField: 'ibzplantempletname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzPlanTempletOptionViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzPlanTempletOptionViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbzPlanTempletOptionViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}