import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProjectMonthlyService from '@/service/ibizpro-project-monthly/ibizpro-project-monthly-service';
import IbizproProjectMonthlyAuthService from '@/authservice/ibizpro-project-monthly/ibizpro-project-monthly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProjectMonthlyUIService from '@/uiservice/ibizpro-project-monthly/ibizpro-project-monthly-ui-service';

/**
 * 项目月报编辑视图视图基类
 *
 * @export
 * @class IbizproProjectMonthlyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProjectMonthlyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    protected appDeName: string = 'ibizproprojectmonthly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    protected appDeKey: string = 'ibizpro_projectmonthlyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    protected appDeMajor: string = 'ibizpro_projectmonthlyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectMonthlyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectMonthlyService}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    protected appEntityService: IbizproProjectMonthlyService = new IbizproProjectMonthlyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProjectMonthlyUIService
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public appUIService: IbizproProjectMonthlyUIService = new IbizproProjectMonthlyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproprojectmonthly.views.editview.caption',
        srfTitle: 'entities.ibizproprojectmonthly.views.editview.title',
        srfSubTitle: 'entities.ibizproprojectmonthly.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectMonthlyEditViewBase
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
     * @memberof IbizproProjectMonthlyEditViewBase
     */
	protected viewtag: string = 'a94ed0bf755673ee7dde89bbfac6d619';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectMonthlyEditViewBase
     */ 
    protected viewName: string = 'IbizproProjectMonthlyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProjectMonthlyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproprojectmonthly',
            majorPSDEField: 'ibizproprojectmonthlyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectMonthlyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}