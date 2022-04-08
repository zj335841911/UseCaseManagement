import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import IbizproProjectWeeklyService from '@/service/ibizpro-project-weekly/ibizpro-project-weekly-service';
import IbizproProjectWeeklyAuthService from '@/authservice/ibizpro-project-weekly/ibizpro-project-weekly-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import IbizproProjectWeeklyUIService from '@/uiservice/ibizpro-project-weekly/ibizpro-project-weekly-ui-service';

/**
 * 项目周报编辑视图视图基类
 *
 * @export
 * @class IbizproProjectWeeklyEditViewBase
 * @extends {EditViewBase}
 */
export class IbizproProjectWeeklyEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    protected appDeName: string = 'ibizproprojectweekly';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    protected appDeKey: string = 'ibzpro_projectweeklyid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    protected appDeMajor: string = 'ibzpro_projectweeklyname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {IbizproProjectWeeklyService}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    protected appEntityService: IbizproProjectWeeklyService = new IbizproProjectWeeklyService;

    /**
     * 实体权限服务对象
     *
     * @type IbizproProjectWeeklyUIService
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public appUIService: IbizproProjectWeeklyUIService = new IbizproProjectWeeklyUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.ibizproprojectweekly.views.editview.caption',
        srfTitle: 'entities.ibizproprojectweekly.views.editview.title',
        srfSubTitle: 'entities.ibizproprojectweekly.views.editview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof IbizproProjectWeeklyEditViewBase
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
     * @memberof IbizproProjectWeeklyEditViewBase
     */
	protected viewtag: string = 'fb9f2a7e4789eb949b4277e2602bb947';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof IbizproProjectWeeklyEditViewBase
     */ 
    protected viewName: string = 'IbizproProjectWeeklyEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof IbizproProjectWeeklyEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'ibizproprojectweekly',
            majorPSDEField: 'projectweeklyname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof IbizproProjectWeeklyEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}