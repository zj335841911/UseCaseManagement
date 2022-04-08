import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import UserYearWorkStatsService from '@/service/user-year-work-stats/user-year-work-stats-service';
import MonthOpenedBugAndCaseService from './month-opened-bug-and-case-portlet-service';
import UserYearWorkStatsUIService from '@/uiservice/user-year-work-stats/user-year-work-stats-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet3部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MonthOpenedBugAndCasePortletBase}
 */
export class MonthOpenedBugAndCasePortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MonthOpenedBugAndCasePortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {MonthOpenedBugAndCaseService}
     * @memberof MonthOpenedBugAndCasePortletBase
     */
    public service: MonthOpenedBugAndCaseService = new MonthOpenedBugAndCaseService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {UserYearWorkStatsService}
     * @memberof MonthOpenedBugAndCasePortletBase
     */
    public appEntityService: UserYearWorkStatsService = new UserYearWorkStatsService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MonthOpenedBugAndCasePortletBase
     */
    protected appDeName: string = 'useryearworkstats';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MonthOpenedBugAndCasePortletBase
     */
    protected appDeLogicName: string = '用户年度工作内容统计';

    /**
     * 界面UI服务对象
     *
     * @type {UserYearWorkStatsUIService}
     * @memberof MonthOpenedBugAndCaseBase
     */  
    public appUIService: UserYearWorkStatsUIService = new UserYearWorkStatsUIService(this.$store);


    /**
     * 长度
     *
     * @type {number}
     * @memberof MonthOpenedBugAndCase
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MonthOpenedBugAndCase
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof MonthOpenedBugAndCaseBase
     */
    public portletType: string = 'chart';

    /**
     * 界面行为模型数据
     *
     * @memberof MonthOpenedBugAndCaseBase
     */
    public uiactionModel: any = {
    }



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MonthOpenedBugAndCaseBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MonthOpenedBugAndCaseBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MonthOpenedBugAndCaseBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MonthOpenedBugAndCaseBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '350px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MonthOpenedBugAndCaseBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MonthOpenedBugAndCaseBase
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
     * @memberof MonthOpenedBugAndCaseBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MonthOpenedBugAndCaseBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof MonthOpenedBugAndCaseBase
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
     * @memberof MonthOpenedBugAndCaseBase
     */
    public refresh(args?: any) {
      this.viewState.next({ tag: 'dashboard_sysportlet3_chart', action: 'refresh', data: args });
    }

}
