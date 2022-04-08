import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import SysUpdateFeaturesService from '@/service/sys-update-features/sys-update-features-service';
import SysUpdateFeaturesAuthService from '@/authservice/sys-update-features/sys-update-features-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import SysUpdateFeaturesUIService from '@/uiservice/sys-update-features/sys-update-features-ui-service';

/**
 * 系统更新功能编辑视图视图基类
 *
 * @export
 * @class SysUpdateFeaturesInfoEditViewBase
 * @extends {EditViewBase}
 */
export class SysUpdateFeaturesInfoEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    protected appDeName: string = 'sysupdatefeatures';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    protected appDeKey: string = 'sys_update_featuresid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    protected appDeMajor: string = 'sys_update_featuresname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateFeaturesService}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    protected appEntityService: SysUpdateFeaturesService = new SysUpdateFeaturesService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateFeaturesUIService
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public appUIService: SysUpdateFeaturesUIService = new SysUpdateFeaturesUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatefeatures.views.infoeditview.caption',
        srfTitle: 'entities.sysupdatefeatures.views.infoeditview.title',
        srfSubTitle: 'entities.sysupdatefeatures.views.infoeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateFeaturesInfoEditViewBase
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
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
	protected viewtag: string = '69f603bbdaf1463452fe56bbd20aefcc';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */ 
    protected viewName: string = 'SysUpdateFeaturesInfoEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'sysupdatefeatures',
            majorPSDEField: 'sysupdatefeaturesname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateFeaturesInfoEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}