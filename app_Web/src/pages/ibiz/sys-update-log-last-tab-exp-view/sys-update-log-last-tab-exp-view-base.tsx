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
 * @class SysUpdateLogLastTabExpViewBase
 * @extends {TabExpViewBase}
 */
export class SysUpdateLogLastTabExpViewBase extends TabExpViewBase {
    /**
     * 视图对应应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    protected appDeName: string = 'sysupdatelog';

    /**
     * 应用实体主键
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    protected appDeKey: string = 'sys_update_logid';

    /**
     * 应用实体主信息
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    protected appDeMajor: string = 'sys_update_logname';

    /**
     * 实体服务对象
     *
     * @type {SysUpdateLogService}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    protected appEntityService: SysUpdateLogService = new SysUpdateLogService;

    /**
     * 实体权限服务对象
     *
     * @type SysUpdateLogUIService
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    public appUIService: SysUpdateLogUIService = new SysUpdateLogUIService(this.$store);

    /**
     * 是否显示信息栏
     *
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    isShowDataInfoBar: boolean = true;

    /**
     * 视图模型数据
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    protected model: any = {
        srfCaption: 'entities.sysupdatelog.views.lasttabexpview.caption',
        srfTitle: 'entities.sysupdatelog.views.lasttabexpview.title',
        srfSubTitle: 'entities.sysupdatelog.views.lasttabexpview.subtitle',
        dataInfo: '',
    };

    /**
     * 容器模型
     *
     * @protected
     * @type {*}
     * @memberof SysUpdateLogLastTabExpViewBase
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
     * @memberof SysUpdateLogLastTabExpViewBase
     */
	protected viewtag: string = '7fe32344f7079d3359213223f8c3f63f';

    /**
     * 视图名称
     *
     * @protected
     * @type {string}
     * @memberof SysUpdateLogLastTabExpViewBase
     */ 
    protected viewName: string = 'SysUpdateLogLastTabExpView';


    /**
     * 视图引擎
     *
     * @public
     * @type {Engine}
     * @memberof SysUpdateLogLastTabExpViewBase
     */
    public engine: TabExpViewEngine = new TabExpViewEngine();


    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof SysUpdateLogLastTabExpViewBase
     */    
    public counterServiceArray: Array<any> = [
        
    ];

    /**
     * 引擎初始化
     *
     * @public
     * @memberof SysUpdateLogLastTabExpViewBase
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