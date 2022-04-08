import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import DashboardViewdashboard_sysportlet2Service from './dashboard-viewdashboard-sysportlet2-portlet-service';
import SysEmployeeUIService from '@/uiservice/sys-employee/sys-employee-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet2部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DashboardViewdashboard_sysportlet2PortletBase}
 */
export class DashboardViewdashboard_sysportlet2PortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DashboardViewdashboard_sysportlet2PortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {DashboardViewdashboard_sysportlet2Service}
     * @memberof DashboardViewdashboard_sysportlet2PortletBase
     */
    public service: DashboardViewdashboard_sysportlet2Service = new DashboardViewdashboard_sysportlet2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {SysEmployeeService}
     * @memberof DashboardViewdashboard_sysportlet2PortletBase
     */
    public appEntityService: SysEmployeeService = new SysEmployeeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DashboardViewdashboard_sysportlet2PortletBase
     */
    protected appDeName: string = 'sysemployee';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DashboardViewdashboard_sysportlet2PortletBase
     */
    protected appDeLogicName: string = '人员';

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */  
    public appUIService: SysEmployeeUIService = new SysEmployeeUIService(this.$store);


    /**
     * 长度
     *
     * @type {number}
     * @memberof DashboardViewdashboard_sysportlet2
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof DashboardViewdashboard_sysportlet2
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public portletType: string = 'sysportlet';

    /**
     * 界面行为模型数据
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public uiactionModel: any = {
    }



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return 'auto';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DashboardViewdashboard_sysportlet2Base
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if(Object.is(tag, "all-portlet") && Object.is(action,'loadmodel')){
                   this.calcUIActionAuthState(data);
                }
                if (!Object.is(tag, this.name)) {
                    return;
                }
                const refs: any = this.$refs;
                Object.keys(refs).forEach((_name: string) => {
                    this.viewState.next({ tag: _name, action: action, data: data });
                });
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public calcUIActionAuthState(data:any = {}) {
        //  如果是操作栏，不计算权限
        if(this.portletType && Object.is('actionbar', this.portletType)) {
            return;
        }
        let _this: any = this;
        let uiservice: any = _this.appUIService ? _this.appUIService : new UIService(_this.$store);
        if(_this.uiactionModel){
            ViewTool.calcActionItemAuthState(data,_this.uiactionModel,uiservice);
        }
    }


    /**
     * 刷新
     *
     * @memberof DashboardViewdashboard_sysportlet2Base
     */
    public refresh(args?: any) {
    }

}
