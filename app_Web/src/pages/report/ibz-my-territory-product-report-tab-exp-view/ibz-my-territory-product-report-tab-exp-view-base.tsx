import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import IbzMyTerritoryService from '@/service/ibz-my-territory/ibz-my-territory-service';
import IbzMyTerritoryAuthService from '@/authservice/ibz-my-territory/ibz-my-territory-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzMyTerritoryUIService from '@/uiservice/ibz-my-territory/ibz-my-territory-ui-service';

/**
 * 我的地盘分页导航视图视图基类
 *
 * @export
 * @class IbzMyTerritoryProductReportTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzMyTerritoryProductReportTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected appDeName: string = 'ibzmyterritory';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected appDeMajor: string = 'realname';

    /**
     * 实体服务对象
     *
     * @type {IbzMyTerritoryService}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected appEntityService: IbzMyTerritoryService = new IbzMyTerritoryService;

    /**
     * 实体权限服务对象
     *
     * @type IbzMyTerritoryUIService
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    public appUIService: IbzMyTerritoryUIService = new IbzMyTerritoryUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzmyterritory.views.productreporttabexpview.caption',
        srfTitle: 'entities.ibzmyterritory.views.productreporttabexpview.title',
        srfSubTitle: 'entities.ibzmyterritory.views.productreporttabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    protected containerModel: any = {
        view_tabexppanel: {
            name: 'tabexppanel',
            type: 'TABEXPPANEL',
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
	protected viewtag: string = '56d37c4b5c3583dd1197209e46f06873';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */ 
    protected viewName: string = 'IbzMyTerritoryProductReportTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzMyTerritoryProductReportTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzmyterritory',
            majorPSDEField: 'realname',
            isLoadDefault: true,
        });
    }


}