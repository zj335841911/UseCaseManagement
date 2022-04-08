import { Subject } from 'rxjs';
import { ViewTool } from '@/utils';
import { EditView9Base } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import UserYearWorkStatsAuthService from '@/authservice/user-year-work-stats/user-year-work-stats-auth-service';
import EditView9Engine from '@engine/view/edit-view9-engine';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';

/**
 * 用户年度工作内容统计编辑视图（标题）视图基类
 *
 * @export
 * @class UserYearWorkStatsTitleEditView9Base
 * @extends {EditView9Base}
 */
export class UserYearWorkStatsTitleEditView9Base extends EditView9Base {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected appDeMajor: string = 'title';

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService;

    /**
     * 实体权限服务对象
     *
     * @type UserYearWorkStatsUIService
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsTitleEditView9Base
	 */
    protected customViewNavContexts: any = {
        'SRFKEY': { isRawValue: false, value: 'srfpersonid' },
        'ID': { isRawValue: false, value: 'srfpersonid' },
        'USERYEARWORKSTATS': { isRawValue: false, value: 'srfpersonid' }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsTitleEditView9Base
	 */
    protected customViewParams: any = {
        'id': { isRawValue: false, value: 'srfpersonid' },
        'useryearworkstats': { isRawValue: false, value: 'srfpersonid' },
        'srfkey': { isRawValue: false, value: 'srfpersonid' }
    };

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected model: any = {
        srfCaption: 'entities.useryearworkstats.views.titleeditview9.caption',
        srfTitle: 'entities.useryearworkstats.views.titleeditview9.title',
        srfSubTitle: 'entities.useryearworkstats.views.titleeditview9.subtitle',
        dataInfo: ''
    }

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    protected containerModel: any = {
        view_form: { name: 'form', type: 'FORM' },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ViewBase
     */
	protected viewtag: string = '96d2f792bc2c38a37fe873a125cb57b6';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public engine: EditView9Engine = new EditView9Engine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserYearWorkStatsTitleEditView9Base
     */    
    public counterServiceArray:Array<any> = [];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'useryearworkstats',
            majorPSDEField: 'title',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsTitleEditView9Base
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }



    /**
     * 视图加载完毕
     *
     * @protected
     * @memberof UserYearWorkStatsTitleEditView9Base
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