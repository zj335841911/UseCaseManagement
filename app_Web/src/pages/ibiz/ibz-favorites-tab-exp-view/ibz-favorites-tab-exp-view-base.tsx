import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import IbzFavoritesService from '@/service/ibz-favorites/ibz-favorites-service';
import IbzFavoritesAuthService from '@/authservice/ibz-favorites/ibz-favorites-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import IbzFavoritesUIService from '@/uiservice/ibz-favorites/ibz-favorites-ui-service';

/**
 * 我的收藏视图基类
 *
 * @export
 * @class IbzFavoritesTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class IbzFavoritesTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeName: string = 'ibzfavorites';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeKey: string = 'ibz_favoritesid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appDeMajor: string = 'ibz_favoritesname';

    /**
     * 实体服务对象
     *
     * @type {IbzFavoritesService}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected appEntityService: IbzFavoritesService = new IbzFavoritesService;

    /**
     * 实体权限服务对象
     *
     * @type IbzFavoritesUIService
     * @memberof IbzFavoritesTabExpViewBase
     */
    public appUIService: IbzFavoritesUIService = new IbzFavoritesUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbzFavoritesTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbzFavoritesTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibzfavorites.views.tabexpview.caption',
        srfTitle: 'entities.ibzfavorites.views.tabexpview.title',
        srfSubTitle: 'entities.ibzfavorites.views.tabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbzFavoritesTabExpViewBase
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
     * @memberof IbzFavoritesTabExpViewBase
     */
	protected viewtag: string = '013fb02e5c34165206932c583a1e355f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbzFavoritesTabExpViewBase
     */ 
    protected viewName: string = 'IbzFavoritesTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbzFavoritesTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbzFavoritesTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbzFavoritesTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'ibzfavorites',
            majorPSDEField: 'ibzfavoritesname',
            isLoadDefault: true,
        });
    }


}