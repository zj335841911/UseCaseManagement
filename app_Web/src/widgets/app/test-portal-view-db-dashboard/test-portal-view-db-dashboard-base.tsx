import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TestPortalView_dbService from './test-portal-view-db-dashboard-service';
import UtilService from '@/utilservice/util-service';

/**
 * dashboard部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TestPortalView_dbDashboardBase}
 */
export class TestPortalView_dbDashboardBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TestPortalView_dbDashboardBase
     */
    protected controlType: string = 'DASHBOARD';

    /**
     * 建构部件服务对象
     *
     * @type {TestPortalView_dbService}
     * @memberof TestPortalView_dbDashboardBase
     */
    public service: TestPortalView_dbService = new TestPortalView_dbService({ $store: this.$store });

    /**
     * 是否支持看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof TestPortalView_db
     */
    @Prop() public isEnableCustomized!:boolean;

    /**
     * 是否已有看板定制
     *
     * @public
     * @type {(boolean)}
     * @memberof TestPortalView_db
     */
    public isHasCustomized:boolean = false;

    /**
     * 模型数据
     *
     * @public
     * @type {(*)}
     * @memberof TestPortalView_db
     */
    public modelDta:any;

    /**
     * modleId
     *
     * @type {string}
     * @memberof TestPortalView_db
     */
    public modelId:string = "dashboard_app_testportalview_db";

    /**
     * 建构功能服务对象
     *
     * @type {UtilService}
     * @memberof TestPortalView_db
     */
    public utilService:UtilService = new UtilService();

    /**
     * 功能服务名称
     *
     * @type {string}
     * @memberof TestPortalView_db
     */
    public utilServiceName:string = "dynadashboard";

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TestPortalView_db
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TestPortalView_db
     */
    public getData(): any {
        return {};
    }

    /**
     * vue 生命周期
     *
     * @memberof TestPortalView_db
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof TestPortalView_db
     */    
    public afterCreated(){
      if (this.viewState) {
          this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
              if (!Object.is(tag, this.name)) {
                  return;
              }
              if (Object.is('load', action)) {
                  this.loadModel();
              }
          });
      }
    }

    /**
     * 动态设计水平列数
     *
     *  @memberof TestPortalView_db
     */   
    public layoutColNum:number = 12;

    /**
     * 动态设计单元格高度，80px
     *
     *  @memberof TestPortalView_db
     */ 
    public layoutRowH:number = 80;

    /**
     *  通知状态
     *
     *  @memberof TestPortalView_db
     */    
    public notifyState(){
      this.$nextTick(() =>{
        if (this.isHasCustomized) {
          if (this.modelDta && this.modelDta.length > 0) {
            this.modelDta.forEach((item: any) => {
              this.viewState.next({
                tag: item.portletCodeName,
                action: "load",
                data: JSON.parse(JSON.stringify(this.viewparams))
              });
            });
          }
        } else {
          if (this.viewState) {
            const refs: any = this.$refs;
            Object.keys(refs).forEach((name: string) => {
              this.viewState.next({
                tag: name,
                action: "load",
                data: JSON.parse(JSON.stringify(this.viewparams))
              });
            });
          }
        }
      })
    }

    /**
     * 加载布局与数据模型
     *
     * @memberof TestPortalView_db
     */
    public loadModel(){
        if(this.isEnableCustomized){
          this.utilService.getService(this.utilServiceName).then((service:any) =>{
            service.loadModelData(JSON.parse(JSON.stringify(this.context)),{modelid:this.modelId,utilServiceName:this.utilServiceName}).then((res:any) =>{
              if(res && res.status == 200){
                const data:any = res.data;
                if(data && data.length >0){
                  this.isHasCustomized = true;
                  this.modelDta = data;
                  this.$forceUpdate();
                }else{
                  this.isHasCustomized = false;
                }
                this.notifyState();
              }else{
                console.error("加载面板模型异常");
                this.isHasCustomized = false;
                this.notifyState();
              }
            }).catch((error:any)=>{
                console.error("加载面板模型异常");
                console.error(error);
                this.isHasCustomized = false;
                this.notifyState();
            });
          })
        }else{
          this.notifyState();
        }
    }

    /**
     * 处理私人定制按钮
     *
     * @memberof TestPortalView_db
     */
    public handleClick(){
      const view:any ={
        viewname: 'app-portal-design',
        title: (this.$t('app.dashBoard.handleClick.title')),
        width: 1600,
        placement: 'DRAWER_RIGHT'
      }
      const viewparam:any ={
        modelid:this.modelId,
        utilServiceName:this.utilServiceName,
        appdeName:'app'
      }
      const appdrawer = this.$appdrawer.openDrawer(view, JSON.parse(JSON.stringify(this.context)), viewparam);
      appdrawer.subscribe((result: any) => {
          if(Object.is(result.ret,'OK')){
            this.loadModel();
          }
      });
    }

    /**
     * vue 生命周期
     *
     * @memberof TestPortalView_db
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof TestPortalView_db
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新
     * 
     * @param args 
     * @memberof TestPortalView_db
     */
    public refresh(args?: any){
      this.$emit('refresh',args);
    }
    
}