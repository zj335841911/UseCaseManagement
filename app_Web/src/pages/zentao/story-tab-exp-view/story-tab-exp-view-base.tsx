import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import StoryService from '@/service/story/story-service';
import StoryAuthService from '@/authservice/story/story-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import StoryUIService from '@/uiservice/story/story-ui-service';

/**
 * 需求分页导航视图视图基类
 *
 * @export
 * @class StoryTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class StoryTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof StoryTabExpViewBase
     */
    protected appDeName: string = 'story';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof StoryTabExpViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof StoryTabExpViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {StoryService}
     * @memberof StoryTabExpViewBase
     */
    protected appEntityService: StoryService = new StoryService;

    /**
     * 实体权限服务对象
     *
     * @type StoryUIService
     * @memberof StoryTabExpViewBase
     */
    public appUIService: StoryUIService = new StoryUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof StoryTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof StoryTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.story.views.tabexpview.caption',
        srfTitle: 'entities.story.views.tabexpview.title',
        srfSubTitle: 'entities.story.views.tabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof StoryTabExpViewBase
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
     * @memberof StoryTabExpViewBase
     */
	protected viewtag: string = '70bca4903c16f4c15bb3b73b570ce8a2';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof StoryTabExpViewBase
     */ 
    protected viewName: string = 'StoryTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof StoryTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof StoryTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof StoryTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'story',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }


}