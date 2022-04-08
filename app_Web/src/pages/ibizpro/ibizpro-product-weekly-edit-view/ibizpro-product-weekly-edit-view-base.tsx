import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProductWeeklyService from '@/service/ibizpro-product-weekly/ibizpro-product-weekly-service';
import IbizproProductWeeklyAuthService from '@/authservice/ibizpro-product-weekly/ibizpro-product-weekly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProductWeeklyUIService from '@/uiservice/ibizpro-product-weekly/ibizpro-product-weekly-ui-service';

/**
 * 产品周报编辑视图视图基类
 *
 * @export
 * @class IbizproProductWeeklyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProductWeeklyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    protected appDeName: string = 'ibizproproductweekly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    protected appDeKey: string = 'ibizpro_productweeklyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    protected appDeMajor: string = 'ibizpro_productdailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductWeeklyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProductWeeklyService}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    protected appEntityService: IbizproProductWeeklyService = new IbizproProductWeeklyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProductWeeklyUIService
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public appUIService: IbizproProductWeeklyUIService = new IbizproProductWeeklyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProductWeeklyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproproductweekly.views.editview.caption',
        srfTitle: 'entities.ibizproproductweekly.views.editview.title',
        srfSubTitle: 'entities.ibizproproductweekly.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductWeeklyEditViewBase
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
     * @memberof IbizproProductWeeklyEditViewBase
     */
	protected viewtag: string = '0eb68ab324993883fb099dcea3836a51';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductWeeklyEditViewBase
     */ 
    protected viewName: string = 'IbizproProductWeeklyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProductWeeklyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproproductweekly',
            majorPSDEField: 'ibizproproductweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductWeeklyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}