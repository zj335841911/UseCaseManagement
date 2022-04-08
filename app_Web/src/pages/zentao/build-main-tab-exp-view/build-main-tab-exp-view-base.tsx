import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import BuildService from '@/service/build/build-service';
import BuildAuthService from '@/authservice/build/build-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import BuildUIService from '@/uiservice/build/build-ui-service';

/**
 * 版本分页导航视图视图基类
 *
 * @export
 * @class BuildMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class BuildMainTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof BuildMainTabExpViewBase
     */
    protected appDeName: string = 'build';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof BuildMainTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof BuildMainTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {BuildService}
     * @memberof BuildMainTabExpViewBase
     */
    protected appEntityService: BuildService = new BuildService;

    /**
     * 实体权限服务对象
     *
     * @type BuildUIService
     * @memberof BuildMainTabExpViewBase
     */
    public appUIService: BuildUIService = new BuildUIService(this.$store);

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof BuildMainTabExpViewBase
	 */
    protected customViewParams: any = {
        'product': {
            isRawValue: false,
            value: 'product',
        },
        'srfparentkey': {
            isRawValue: false,
            value: 'build',
        },
        'project': {
            isRawValue: false,
            value: 'project',
        },
        'objecttype': {
            isRawValue: true,
            value: 'build',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof BuildMainTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof BuildMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.build.views.maintabexpview.caption',
        srfTitle: 'entities.build.views.maintabexpview.title',
        srfSubTitle: 'entities.build.views.maintabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof BuildMainTabExpViewBase
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
     * @memberof BuildMainTabExpViewBase
     */
	protected viewtag: string = '7f78aec6820c14e08caf8fa56087866f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof BuildMainTabExpViewBase
     */ 
    protected viewName: string = 'BuildMainTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof BuildMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof BuildMainTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof BuildMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'build',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}