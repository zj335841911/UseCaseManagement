import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProjectDailyService from '@/service/ibizpro-project-daily/ibizpro-project-daily-service';
import IbizproProjectDailyAuthService from '@/authservice/ibizpro-project-daily/ibizpro-project-daily-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProjectDailyUIService from '@/uiservice/ibizpro-project-daily/ibizpro-project-daily-ui-service';

/**
 * 项目日报编辑视图视图基类
 *
 * @export
 * @class IbizproProjectDailyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProjectDailyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyEditViewBase
     */
    protected appDeName: string = 'ibizproprojectdaily';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyEditViewBase
     */
    protected appDeKey: string = 'ibizpro_projectdailyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyEditViewBase
     */
    protected appDeMajor: string = 'ibizpro_projectdailyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectDailyService}
     * @memberof IbizproProjectDailyEditViewBase
     */
    protected appEntityService: IbizproProjectDailyService = new IbizproProjectDailyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProjectDailyUIService
     * @memberof IbizproProjectDailyEditViewBase
     */
    public appUIService: IbizproProjectDailyUIService = new IbizproProjectDailyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProjectDailyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectDailyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproprojectdaily.views.editview.caption',
        srfTitle: 'entities.ibizproprojectdaily.views.editview.title',
        srfSubTitle: 'entities.ibizproprojectdaily.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectDailyEditViewBase
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
     * @memberof IbizproProjectDailyEditViewBase
     */
	protected viewtag: string = '1ce9c1547b9b2ef281d884b93c19f189';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectDailyEditViewBase
     */ 
    protected viewName: string = 'IbizproProjectDailyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProjectDailyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProjectDailyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProjectDailyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproprojectdaily',
            majorPSDEField: 'ibizproprojectdailyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectDailyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}