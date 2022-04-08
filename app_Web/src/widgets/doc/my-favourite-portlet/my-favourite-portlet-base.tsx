import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import MyFavouriteService from './my-favourite-portlet-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import { Environment } from '@/environments/environment';
import UIService from '@/uiservice/ui-service';

/**
 * dashboard_sysportlet5部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MyFavouritePortletBase}
 */
export class MyFavouritePortletBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MyFavouritePortletBase
     */
    protected controlType: string = 'PORTLET';

    /**
     * 建构部件服务对象
     *
     * @type {MyFavouriteService}
     * @memberof MyFavouritePortletBase
     */
    public service: MyFavouriteService = new MyFavouriteService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof MyFavouritePortletBase
     */
    public appEntityService: DocService = new DocService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavouritePortletBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MyFavouritePortletBase
     */
    protected appDeLogicName: string = '文档';

    /**
     * 界面UI服务对象
     *
     * @type {DocUIService}
     * @memberof MyFavouriteBase
     */  
    public appUIService: DocUIService = new DocUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public dashboard_sysportlet5_u796de2e_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:DocUIService  = new DocUIService();
        curUIService.Doc_MoreMyFavourite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }


    /**
     * 长度
     *
     * @type {number}
     * @memberof MyFavourite
     */
    @Prop() public height?: number;

    /**
     * 宽度
     *
     * @type {number}
     * @memberof MyFavourite
     */
    @Prop() public width?: number;

    /**
     * 门户部件类型
     *
     * @type {number}
     * @memberof MyFavouriteBase
     */
    public portletType: string = 'view';

    /**
     * 界面行为模型数据
     *
     * @memberof MyFavouriteBase
     */
    public uiactionModel: any = {
        moremyfavourite: {name: 'moremyfavourite', actiontarget: 'NONE', caption: '', disabled: false, type: 'DEUIACTION', visible: true, noprivdisplaymode: 2, dataaccaction: '', uiaction: { tag: 'MoreMyFavourite', target: 'NONE' } },
    }



    /**
     * 是否自适应大小
     *
     * @returns {boolean}
     * @memberof MyFavouriteBase
     */
    @Prop({default: false})public isAdaptiveSize!: boolean;

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MyFavouriteBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MyFavouriteBase
     */
    public getData(): any {
        return {};
    }

    /**
     * 获取高度
     *
     * @returns {any[]}
     * @memberof MyFavouriteBase
     */
    get getHeight(): any{
        if(!this.$util.isEmpty(this.height) && !this.$util.isNumberNaN(this.height)){
            if(this.height == 0){
                return 'auto';
            } else {
                return this.height+'px';
            }
        } else {
            return '235px';
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof MyFavouriteBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MyFavouriteBase
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
     * @memberof MyFavouriteBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MyFavouriteBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 计算界面行为权限
     *
     * @memberof MyFavouriteBase
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
     * 执行界面行为
     *
     * @memberof MyFavouriteBase
     */
    public uiAction(tag:string,event:any){
        if(Object.is(tag,'u796de2e')){
            this.dashboard_sysportlet5_u796de2e_click(null,tag,event);
        }
    }

    /**
     * 刷新
     *
     * @memberof MyFavouriteBase
     */
    public refresh(args?: any) {
      this.viewState.next({ tag: 'DocMyFavouritePartGridView', action: 'refresh', data: args });
    }

}
