import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditView9Base } from '@/studio-core';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import ProductStatsAuthService from '@/authservice/product-stats/product-stats-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';

/**
 * 产品统计编辑视图视图基类
 *
 * @export
 * @class ProductStatsEditView9Base
 * @extends {EditView9Base}
 */
export class ProductStatsEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsEditView9Base
     */
    protected appDeName: string = 'productstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsEditView9Base
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsEditView9Base
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof ProductStatsEditView9Base
     */
    protected appEntityService: ProductStatsService = new ProductStatsService;

    /**
     * 实体权限服务对象
     *
     * @type ProductStatsUIService
     * @memberof ProductStatsEditView9Base
     */
    public appUIService: ProductStatsUIService = new ProductStatsUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductStatsEditView9Base
	 */
    protected customViewNavContexts: any = {
        'PRODUCTSTATS': {
            isRawValue: false,
            value: 'product',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProductStatsEditView9Base
	 */
    protected customViewParams: any = {
        'product': {
            isRawValue: false,
            value: 'product',
        }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.productstats.views.editview9.caption',
        srfTitle: 'entities.productstats.views.editview9.title',
        srfSubTitle: 'entities.productstats.views.editview9.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProductStatsEditView9Base
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
     * @memberof ProductStatsEditView9Base
     */
	protected viewtag: string = 'c9f01b5b2c2c2c6f8e4bc4bd4db9a323';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProductStatsEditView9Base
     */ 
    protected viewName: string = 'ProductStatsEditView9';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProductStatsEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProductStatsEditView9Base
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProductStatsEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'productstats',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductStatsEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof ProductStatsEditView9Base
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