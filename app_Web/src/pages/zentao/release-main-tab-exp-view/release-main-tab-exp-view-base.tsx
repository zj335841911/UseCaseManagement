import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import ReleaseService from '@/service/release/release-service';
import ReleaseAuthService from '@/authservice/release/release-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import ReleaseUIService from '@/uiservice/release/release-ui-service';

/**
 * 发布分页导航视图视图基类
 *
 * @export
 * @class ReleaseMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ReleaseMainTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appDeName: string = 'release';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ReleaseService}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected appEntityService: ReleaseService = new ReleaseService;

    /**
     * 实体权限服务对象
     *
     * @type ReleaseUIService
     * @memberof ReleaseMainTabExpViewBase
     */
    public appUIService: ReleaseUIService = new ReleaseUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ReleaseMainTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.release.views.maintabexpview.caption',
        srfTitle: 'entities.release.views.maintabexpview.title',
        srfSubTitle: 'entities.release.views.maintabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ReleaseMainTabExpViewBase
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
     * @memberof ReleaseMainTabExpViewBase
     */
	protected viewtag: string = '9ffdec79c2fcb400382cc454c396e918';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ReleaseMainTabExpViewBase
     */ 
    protected viewName: string = 'ReleaseMainTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ReleaseMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ReleaseMainTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ReleaseMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'release',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}