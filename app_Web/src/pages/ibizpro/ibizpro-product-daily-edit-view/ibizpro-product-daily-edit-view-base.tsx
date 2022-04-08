import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProductDailyService from '@/service/ibizpro-product-daily/ibizpro-product-daily-service';
import IbizproProductDailyAuthService from '@/authservice/ibizpro-product-daily/ibizpro-product-daily-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProductDailyUIService from '@/uiservice/ibizpro-product-daily/ibizpro-product-daily-ui-service';

/**
 * 产品日报编辑视图视图基类
 *
 * @export
 * @class IbizproProductDailyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProductDailyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductDailyEditViewBase
     */
    protected appDeName: string = 'ibizproproductdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductDailyEditViewBase
     */
    protected appDeKey: string = 'ibizpro_productdailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductDailyEditViewBase
     */
    protected appDeMajor: string = 'ibizpro_productdailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductDailyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProductDailyService}
     * @memberof IbizproProductDailyEditViewBase
     */
    protected appEntityService: IbizproProductDailyService = new IbizproProductDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProductDailyUIService
     * @memberof IbizproProductDailyEditViewBase
     */
    public appUIService: IbizproProductDailyUIService = new IbizproProductDailyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProductDailyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductDailyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproproductdaily.views.editview.caption',
        srfTitle: 'entities.ibizproproductdaily.views.editview.title',
        srfSubTitle: 'entities.ibizproproductdaily.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProductDailyEditViewBase
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
     * @memberof IbizproProductDailyEditViewBase
     */
	protected viewtag: string = '2d146e30c5656734a82bd223baf60f3e';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProductDailyEditViewBase
     */ 
    protected viewName: string = 'IbizproProductDailyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProductDailyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProductDailyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProductDailyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproproductdaily',
            majorPSDEField: 'ibizproproductdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductDailyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductDailyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProductDailyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}