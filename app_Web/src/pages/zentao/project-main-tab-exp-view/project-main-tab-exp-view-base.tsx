import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import ProjectService from '@/service/project/project-service';
import ProjectAuthService from '@/authservice/project/project-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import ProjectUIService from '@/uiservice/project/project-ui-service';

/**
 * 项目视图基类
 *
 * @export
 * @class ProjectMainTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class ProjectMainTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainTabExpViewBase
     */
    protected appDeName: string = 'project';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainTabExpViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 实体服务对象
     *
     * @type {ProjectService}
     * @memberof ProjectMainTabExpViewBase
     */
    protected appEntityService: ProjectService = new ProjectService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectUIService
     * @memberof ProjectMainTabExpViewBase
     */
    public appUIService: ProjectUIService = new ProjectUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectMainTabExpViewBase
	 */
    protected customViewNavContexts: any = {
        'OBJECTTYPE': {
            isRawValue: true,
            value: 'project',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof ProjectMainTabExpViewBase
	 */
    protected customViewParams: any = {
        'n_product_eq': {
            isRawValue: true,
            value: 'null',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof ProjectMainTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.project.views.maintabexpview.caption',
        srfTitle: 'entities.project.views.maintabexpview.title',
        srfSubTitle: 'entities.project.views.maintabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectMainTabExpViewBase
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
     * @memberof ProjectMainTabExpViewBase
     */
	protected viewtag: string = 'fd0b8748ff96edcde009d39903a9f211';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectMainTabExpViewBase
     */ 
    protected viewName: string = 'ProjectMainTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectMainTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectMainTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectMainTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'project',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }


}