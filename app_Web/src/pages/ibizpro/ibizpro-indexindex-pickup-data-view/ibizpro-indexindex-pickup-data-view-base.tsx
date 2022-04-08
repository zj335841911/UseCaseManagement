import { Subject } from 'rxjs';
import { UIActionTool, ViewTool } from '@/utils';
import { IndexPickupDataViewBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IbizproIndexAuthService from '@/authservice/ibizpro-index/ibizpro-index-auth-service';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';

/**
 * 索引检索索引关系选择数据视图视图基类
 *
 * @export
 * @class IBIZPRO_INDEXIndexPickupDataViewBase
 * @extends {IndexPickupDataViewBase}
 */
export class IBIZPRO_INDEXIndexPickupDataViewBase extends IndexPickupDataViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected appDeKey: string = 'indexid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected appDeMajor: string = 'indexname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */ 
    protected dataControl: string = 'dataview';

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected appEntityService: IbizproIndexService = new IbizproIndexService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproIndexUIService
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproindex.views.indexpickupdataview.caption',
        srfTitle: 'entities.ibizproindex.views.indexpickupdataview.title',
        srfSubTitle: 'entities.ibizproindex.views.indexpickupdataview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    protected containerModel: any = {
        view_dataview: {
            name: 'dataview',
            type: 'DATAVIEW',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
	protected viewtag: string = '92269965704a55f1342317470d86e5e3';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */ 
    protected viewName: string = 'IBIZPRO_INDEXIndexPickupDataView';



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IBIZPRO_INDEXIndexPickupDataViewBase
     */
    public engineInit(): void {
    }


}