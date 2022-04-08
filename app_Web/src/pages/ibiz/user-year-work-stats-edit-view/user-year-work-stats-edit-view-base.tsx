import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import UserYearWorkStatsAuthService from '@/authservice/user-year-work-stats/user-year-work-stats-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';

/**
 * 用户年度工作内容统计编辑视图视图基类
 *
 * @export
 * @class UserYearWorkStatsEditViewBase
 * @extends {EditViewBase}
 */
export class UserYearWorkStatsEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsEditViewBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsEditViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsEditViewBase
     */
    protected appDeMajor: string = 'title';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof UserYearWorkStatsEditViewBase
     */
    protected appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService;

    /**
     * 实体权限服务对象
     *
     * @type UserYearWorkStatsUIService
     * @memberof UserYearWorkStatsEditViewBase
     */
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);

	/**
	 * 自定义视图导航上下文集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsEditViewBase
	 */
    protected customViewNavContexts: any = {
        'SRFKEY': {
            isRawValue: false,
            value: 'srfpersonid',
        },
        'ID': {
            isRawValue: false,
            value: 'srfpersonid',
        },
        'USERYEARWORKSTATS': {
            isRawValue: false,
            value: 'srfpersonid',
        }
    };

	/**
	 * 自定义视图导航参数集合
	 *
     * @protected
	 * @type {*}
	 * @memberof UserYearWorkStatsEditViewBase
	 */
    protected customViewParams: any = {
        'id': {
            isRawValue: false,
            value: 'srfpersonid',
        },
        'useryearworkstats': {
            isRawValue: false,
            value: 'srfpersonid',
        },
        'srfkey': {
            isRawValue: false,
            value: 'srfpersonid',
        }
    };

    /**
     * 是否显示信息栏
     *
     * @memberof UserYearWorkStatsEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.useryearworkstats.views.editview.caption',
        srfTitle: 'entities.useryearworkstats.views.editview.title',
        srfSubTitle: 'entities.useryearworkstats.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof UserYearWorkStatsEditViewBase
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
     * @memberof UserYearWorkStatsEditViewBase
     */
	protected viewtag: string = '92828782339ab18470626ac28292615a';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof UserYearWorkStatsEditViewBase
     */ 
    protected viewName: string = 'UserYearWorkStatsEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof UserYearWorkStatsEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof UserYearWorkStatsEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof UserYearWorkStatsEditViewBase
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
     * @memberof UserYearWorkStatsEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof UserYearWorkStatsEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}