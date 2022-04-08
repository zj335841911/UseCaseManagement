import { Subject } from 'rxjs';
import { UIActionTool, ViewTool, Util } from '@/utils';
import { TabExpViewBase } from '@/studio-core';
import SysUpdateLogService from '@/service/sys-update-log/sys-update-log-service';
import SysUpdateLogAuthService from '@/authservice/sys-update-log/sys-update-log-auth-service';
import TabExpViewEngine from '@engine/view/tab-exp-view-engine';
import SysUpdateLogUIService from '@/uiservice/sys-update-log/sys-update-log-ui-service';

/**
 * 系统更新日志分页导航视图视图基类
 *
 * @export
 * @class SysUpdateLogTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class SysUpdateLogTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogTabExpViewBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogTabExpViewBase
     */
    protected appDeKey: string = 'sys_update_logid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogTabExpViewBase
     */
    protected appDeMajor: string = 'sys_update_logname';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof SysUpdateLogTabExpViewBase
     */
    protected appEntityService: SysUpdateLogService = new SysUpdateLogService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateLogUIService
     * @memberof SysUpdateLogTabExpViewBase
     */
    public appUIService: SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof SysUpdateLogTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatelog.views.tabexpview.caption',
        srfTitle: 'entities.sysupdatelog.views.tabexpview.title',
        srfSubTitle: 'entities.sysupdatelog.views.tabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogTabExpViewBase
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
     * @memberof SysUpdateLogTabExpViewBase
     */
	protected viewtag: string = 'c02fd7282430ea240e80829edd7f7898';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogTabExpViewBase
     */ 
    protected viewName: string = 'SysUpdateLogTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateLogTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateLogTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateLogTabExpViewBase
     */
    public engineInit(): void {
        this.engine.init({
            view: this,
            keyPSDEField: 'sysupdatelog',
            majorPSDEField: 'sysupdatelogname',
            isLoadDefault: true,
        });
    }


}