import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProductMonthlyService from '@/service/ibizpro-product-monthly/ibizpro-product-monthly-service';
import IbizproProductMonthlyAuthService from '@/authservice/ibizpro-product-monthly/ibizpro-product-monthly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProductMonthlyUIService from '@/uiservice/ibizpro-product-monthly/ibizpro-product-monthly-ui-service';

/**
 * 产品月报编辑视图视图基类
 *
 * @export
 * @class IbizproProductMonthlyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProductMonthlyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    protected appDeName: string = 'ibizproproductmonthly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    protected appDeKey: string = 'ibizpro_productmonthlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    protected appDeMajor: string = 'ibizpro_productmonthlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductMonthlyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProductMonthlyService}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    protected appEntityService: IbizproProductMonthlyService = new IbizproProductMonthlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProductMonthlyUIService
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public appUIService: IbizproProductMonthlyUIService = new IbizproProductMonthlyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProductMonthlyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproproductmonthly.views.editview.caption',
        srfTitle: 'entities.ibizproproductmonthly.views.editview.title',
        srfSubTitle: 'entities.ibizproproductmonthly.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductMonthlyEditViewBase
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
     * @memberof IbizproProductMonthlyEditViewBase
     */
	protected viewtag: string = '2aa4e8cde53c414bb05ed41f3494f9bb';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductMonthlyEditViewBase
     */ 
    protected viewName: string = 'IbizproProductMonthlyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProductMonthlyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproproductmonthly',
            majorPSDEField: 'ibizproproductmonthlyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductMonthlyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}