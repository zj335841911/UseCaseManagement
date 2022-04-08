import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { OptionViewBase } from '@/studio-core';
import ProjectModuleService from '@/service/project-module/project-module-service';
import ProjectModuleAuthService from '@/authservice/project-module/project-module-auth-service';
import OptionViewEngine from '@engine/view/option-view-engine';
import ProjectModuleUIService from '@/uiservice/project-module/project-module-ui-service';

/**
 * 任务模块视图基类
 *
 * @export
 * @class ProjectModuleQuickCfgViewBase
 * @extends {OptionViewBase}
 */
export class ProjectModuleQuickCfgViewBase extends OptionViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected appDeName: string = 'projectmodule';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected appDeKey: string = 'id';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected appDeMajor: string = 'name';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {ProjectModuleService}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected appEntityService: ProjectModuleService = new ProjectModuleService;

    /**
     * 实体权限服务对象
     *
     * @type ProjectModuleUIService
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public appUIService: ProjectModuleUIService = new ProjectModuleUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof ProjectModuleQuickCfgViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected model: any = {
        srfCaption: 'entities.projectmodule.views.quickcfgview.caption',
        srfTitle: 'entities.projectmodule.views.quickcfgview.title',
        srfSubTitle: 'entities.projectmodule.views.quickcfgview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    protected containerModel: any = {
        view_form: {
            name: 'form',
            type: 'FORM',
        },
        view_okbtn: {
            name: 'okbtn',
            type: 'button',
            text: '确定',
            disabled: true,
        },
        view_cancelbtn: {
            name: 'cancelbtn',
            type: 'button',
            text: '取消',
            disabled: false,
        },
        view_leftbtn: {
            name: 'leftbtn',
            type: 'button',
            text: '左移',
            disabled: true,
        },
        view_rightbtn: {
            name: 'rightbtn',
            type: 'button',
            text: '右移',
            disabled: true,},
        view_allleftbtn: {
            name: 'allleftbtn',
            type: 'button',
            text: '全部左移',
            disabled: true,
        },
        view_allrightbtn: {
            name: 'allrightbtn',
            type: 'button',
            text: '全部右移',
            disabled: true,
        },
    };


	/**
     * 视图唯一标识
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */
	protected viewtag: string = 'd74289c64b10041b287211156dc0e147';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof ProjectModuleQuickCfgViewBase
     */ 
    protected viewName: string = 'ProjectModuleQuickCfgView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public engine: OptionViewEngine = new OptionViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof ProjectModuleQuickCfgViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'projectmodule',
            majorPSDEField: 'name',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProjectModuleQuickCfgViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}