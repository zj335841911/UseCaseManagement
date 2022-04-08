import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { EditViewBase } from '@/studio-core';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import SysUpdateLogAuthService from '@/authservice/sys-update-log/sys-update-log-auth-service';
import EditViewEngine from '@engine/view/edit-view-engine';
import SysUpdateLogUIService from '@/uiservice/sys-update-log/sys-update-log-ui-service';

/**
 * 系统更新日志编辑视图视图基类
 *
 * @export
 * @class SysUpdateLogInfoEditViewBase
 * @extends {EditViewBase}
 */
export class SysUpdateLogInfoEditViewBase extends EditViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    protected appDeKey: string = 'sys_update_logid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    protected appDeMajor: string = 'sys_update_logname';

    /**
     * 数据部件名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogInfoEditViewBase
     */ 
    protected dataControl: string = 'form';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    protected appEntityService: SysUpdateLogService = new SysUpdateLogService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateLogUIService
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public appUIService: SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof SysUpdateLogInfoEditViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatelog.views.infoeditview.caption',
        srfTitle: 'entities.sysupdatelog.views.infoeditview.title',
        srfSubTitle: 'entities.sysupdatelog.views.infoeditview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogInfoEditViewBase
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
     * @memberof SysUpdateLogInfoEditViewBase
     */
	protected viewtag: string = 'f05b112ce6c2ef73ca7d15ad98a0f689';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogInfoEditViewBase
     */ 
    protected viewName: string = 'SysUpdateLogInfoEditView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public engine: EditViewEngine = new EditViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateLogInfoEditViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            form: this.$refs.form,
            p2k: '0',
            keyPSDEField: 'sysupdatelog',
            majorPSDEField: 'sysupdatelogname',
            isLoadDefault: true,
        });
    }

    /**
     * form 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public form_save($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'save', $event);
    }

    /**
     * form 部件 remove 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public form_remove($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'remove', $event);
    }

    /**
     * form 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof SysUpdateLogInfoEditViewBase
     */
    public form_load($event: any, $event2?: any): void {
        this.engine.onCtrlEvent('form', 'load', $event);
    }


}