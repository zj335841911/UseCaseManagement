import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import DocService from '@/service/doc/doc-service';
import MoreMyFavouritesTreeService from './more-my-favourites-tree-treeview-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import DocLibModuleUIService from '@/uiservice/doc-lib-module/doc-lib-module-ui-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';
import { Environment } from '@/environments/environment';

/**
 * tree部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MoreMyFavouritesTreeTreeBase}
 */
export class MoreMyFavouritesTreeTreeBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    protected controlType: string = 'TREEVIEW';

    /**
     * 建构部件服务对象
     *
     * @type {MoreMyFavouritesTreeService}
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public service: MoreMyFavouritesTreeService = new MoreMyFavouritesTreeService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocService}
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public appEntityService: DocService = new DocService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    protected appDeName: string = 'doc';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    protected appDeLogicName: string = '文档';

    /**
     * 界面UI服务对象
     *
     * @type {DocUIService}
     * @memberof MoreMyFavouritesTreeBase
     */  
    public appUIService: DocUIService = new DocUIService(this.$store);

    /**
     * rootdir_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public rootdir_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.rootdir_cm_deuiaction1_click(null, 'rootdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.rootdir_cm_deuiaction4_click(null, 'rootdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.rootdir_cm_deuiaction2_click(null, 'rootdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.rootdir_cm_deuiaction3_click(null, 'rootdir_cm', $event2);
        }
    }

    /**
     * doc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public doc_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doc_cm_deuiaction1_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.doc_cm_deuiaction4_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doc_cm_deuiaction2_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doc_cm_deuiaction3_click(null, 'doc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction5')) {
            this.doc_cm_deuiaction5_click(null, 'doc_cm', $event2);
        }
    }

    /**
     * doclib_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public doclib_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doclib_cm_deuiaction1_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doclib_cm_deuiaction2_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doclib_cm_deuiaction3_click(null, 'doclib_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.doclib_cm_deuiaction4_click(null, 'doclib_cm', $event2);
        }
    }

    /**
     * module_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public module_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.module_cm_deuiaction1_click(null, 'module_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.module_cm_deuiaction4_click(null, 'module_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.module_cm_deuiaction2_click(null, 'module_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.module_cm_deuiaction3_click(null, 'module_cm', $event2);
        }
    }

    /**
     * doclibdoc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public doclibdoc_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doclibdoc_cm_deuiaction1_click(null, 'doclibdoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.doclibdoc_cm_deuiaction4_click(null, 'doclibdoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doclibdoc_cm_deuiaction2_click(null, 'doclibdoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doclibdoc_cm_deuiaction3_click(null, 'doclibdoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction5')) {
            this.doclibdoc_cm_deuiaction5_click(null, 'doclibdoc_cm', $event2);
        }
    }

    /**
     * childdir_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public childdir_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.childdir_cm_deuiaction1_click(null, 'childdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.childdir_cm_deuiaction4_click(null, 'childdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.childdir_cm_deuiaction2_click(null, 'childdir_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.childdir_cm_deuiaction3_click(null, 'childdir_cm', $event2);
        }
    }

    /**
     * moduledoc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof MoreMyFavouritesTreeTreeBase
     */
    public moduledoc_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.moduledoc_cm_deuiaction1_click(null, 'moduledoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.moduledoc_cm_deuiaction4_click(null, 'moduledoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.moduledoc_cm_deuiaction2_click(null, 'moduledoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.moduledoc_cm_deuiaction3_click(null, 'moduledoc_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction5')) {
            this.moduledoc_cm_deuiaction5_click(null, 'moduledoc_cm', $event2);
        }
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyUnCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doc_cm_deuiaction5_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_DocInfo(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public moduledoc_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public moduledoc_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public moduledoc_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public moduledoc_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyUnCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public moduledoc_cm_deuiaction5_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_DocInfo(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibdoc_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibdoc_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibdoc_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibdoc_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_OnlyUnCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibdoc_cm_deuiaction5_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        curUIService.Doc_DocInfo(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public rootdir_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public rootdir_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public rootdir_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public rootdir_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_EditDocLib(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_UnCollect(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclib_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibUIService  = new DocLibUIService();
        curUIService.DocLib_Collect(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdir_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdir_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdir_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdir_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public module_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public module_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public module_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public module_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
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
        const curUIService:DocLibModuleUIService  = new DocLibModuleUIService();
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"Doc");
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MoreMyFavouritesTreeBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MoreMyFavouritesTreeBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof MoreMyFavouritesTreeBase
     */
    public currentselectedNode: any = {};

    /**
     * 备份行为模型
     * 
     * @type any
     * @memberof MoreMyFavouritesTreeBase
     */
    public copyActionModel: any = {};

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤值
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    public srfnodefilter: string = '';

    /**
     * 当前文件夹所有符合条件的文件
     *  
     * @type {Array<any>}
     * @memberof MoreMyFavouritesTreeBase
     */
    public items: any[] = [];

    /**
     * loading状态
     *  
     * @type {Boolean}
     * @memberof MoreMyFavouritesTreeBase
     */
    public loading: boolean = false;

    /**
     * 面包屑数据(默认第一项为图标)
     * 
     * @type {Array<any>}
     * @memberof MoreMyFavouritesTreeBase
     */
    public breadcrumbs: Array<any> = [{curData: ''}];

    /**
     * 展现形式(默认为图表)
     * 
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    public mode: string = 'chart';

    /**
     * 当前文件夹
     *
     * @type {*}
     * @memberofMoreMyFavouritesTreeBase
     */
    public currentNode = {};

    /**
     * 分页条数默认20
     *
     * @type {number}
     * @memberof MoreMyFavouritesTreeBase
     */
    public limit: number = 20;

    /**
     * 总条数默认0
     *
     * @type {number}
     * @memberof MoreMyFavouritesTreeBase
     */
    public totalRecord: number = 0;

    /**
     * 当前页默认1
     *
     * @type {number}
     * @memberof MoreMyFavouritesTreeBase
     */
    public curPage: number = 1;

    /**
     * 当前页数据
     *
     * @type {Array<any>}
     * @memberof MoreMyFavouritesTreeBase
     */
    public curPageItems: any[] = [];

    /**
     * 图片加载路径
     *
     * @type {string}
     * @memberof MoreMyFavouritesTreeBase
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof MoreMyFavouritesTreeBase
     */
     public actionModel: any = {
        RootDir_deuiaction1: {ctrlname: 'rootdir_cm',name:'deuiaction1',nodeOwner:'RootDir',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_edit'},
        RootDir_deuiaction4: {ctrlname: 'rootdir_cm',name:'deuiaction4',nodeOwner:'RootDir',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_weihufenlei'},
        RootDir_deuiaction2: {ctrlname: 'rootdir_cm',name:'deuiaction2',nodeOwner:'RootDir',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_favorite'},
        RootDir_deuiaction3: {ctrlname: 'rootdir_cm',name:'deuiaction3',nodeOwner:'RootDir',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_nfavorite'},
        Doc_deuiaction1: {ctrlname: 'doc_cm',name:'deuiaction1',nodeOwner:'Doc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_edit'},
        Doc_deuiaction4: {ctrlname: 'doc_cm',name:'deuiaction4',nodeOwner:'Doc',type: 'DEUIACTION', tag: 'Delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_delete'},
        Doc_deuiaction2: {ctrlname: 'doc_cm',name:'deuiaction2',nodeOwner:'Doc',type: 'DEUIACTION', tag: 'OnlyCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlycollectdoc'},
        Doc_deuiaction3: {ctrlname: 'doc_cm',name:'deuiaction3',nodeOwner:'Doc',type: 'DEUIACTION', tag: 'OnlyUnCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlyuncollectdoc'},
        Doc_deuiaction5: {ctrlname: 'doc_cm',name:'deuiaction5',nodeOwner:'Doc',type: 'DEUIACTION', tag: 'DocInfo', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-eye',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_docinfo'},
        DocLib_deuiaction1: {ctrlname: 'doclib_cm',name:'deuiaction1',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'EditDocLib', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclib_editdoclib'},
        DocLib_deuiaction2: {ctrlname: 'doclib_cm',name:'deuiaction2',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclib_weihufenlei'},
        DocLib_deuiaction3: {ctrlname: 'doclib_cm',name:'deuiaction3',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'UnCollect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclib_uncollect'},
        DocLib_deuiaction4: {ctrlname: 'doclib_cm',name:'deuiaction4',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'Collect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclib_collect'},
        Module_deuiaction1: {ctrlname: 'module_cm',name:'deuiaction1',nodeOwner:'Module',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_edit'},
        Module_deuiaction4: {ctrlname: 'module_cm',name:'deuiaction4',nodeOwner:'Module',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_weihufenlei'},
        Module_deuiaction2: {ctrlname: 'module_cm',name:'deuiaction2',nodeOwner:'Module',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_favorite'},
        Module_deuiaction3: {ctrlname: 'module_cm',name:'deuiaction3',nodeOwner:'Module',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_nfavorite'},
        DocLibDoc_deuiaction1: {ctrlname: 'doclibdoc_cm',name:'deuiaction1',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_edit'},
        DocLibDoc_deuiaction4: {ctrlname: 'doclibdoc_cm',name:'deuiaction4',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'Delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_delete'},
        DocLibDoc_deuiaction2: {ctrlname: 'doclibdoc_cm',name:'deuiaction2',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'OnlyCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlycollectdoc'},
        DocLibDoc_deuiaction3: {ctrlname: 'doclibdoc_cm',name:'deuiaction3',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'OnlyUnCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlyuncollectdoc'},
        DocLibDoc_deuiaction5: {ctrlname: 'doclibdoc_cm',name:'deuiaction5',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'DocInfo', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-eye',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_docinfo'},
        ChildDir_deuiaction1: {ctrlname: 'childdir_cm',name:'deuiaction1',nodeOwner:'ChildDir',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_edit'},
        ChildDir_deuiaction4: {ctrlname: 'childdir_cm',name:'deuiaction4',nodeOwner:'ChildDir',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_weihufenlei'},
        ChildDir_deuiaction2: {ctrlname: 'childdir_cm',name:'deuiaction2',nodeOwner:'ChildDir',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_favorite'},
        ChildDir_deuiaction3: {ctrlname: 'childdir_cm',name:'deuiaction3',nodeOwner:'ChildDir',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doclibmodule_nfavorite'},
        ModuleDoc_deuiaction1: {ctrlname: 'moduledoc_cm',name:'deuiaction1',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_edit'},
        ModuleDoc_deuiaction4: {ctrlname: 'moduledoc_cm',name:'deuiaction4',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'Delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_delete'},
        ModuleDoc_deuiaction2: {ctrlname: 'moduledoc_cm',name:'deuiaction2',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'OnlyCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlycollectdoc'},
        ModuleDoc_deuiaction3: {ctrlname: 'moduledoc_cm',name:'deuiaction3',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'OnlyUnCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_onlyuncollectdoc'},
        ModuleDoc_deuiaction5: {ctrlname: 'moduledoc_cm',name:'deuiaction5',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'DocInfo', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-eye',caption: '',title:'entities.doc.moremyfavouritestree_treeview.uiactions.doc_docinfo'},
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof MoreMyFavouritesTreeBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MoreMyFavouritesTreeBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('load', action)) {
                    this.initData();
                    this.load();
                }
                if (Object.is('filter', action)) {
                    this.srfnodefilter  = data.srfnodefilter;
                    this.refresh();
                }
                if (Object.is('refresh_parent', action)) {
                    this.refresh();
                }
                if (Object.is('refresh_current', action)) {
                    this.refresh();
                }
            });
        }
    }

    /**
     * 初始化目录树参数
     * 
     * @memberof MoreMyFavouritesTreeBase
     */
    public initData(){
        this.breadcrumbs.splice(1);
        this.mode = 'chart';
        this.curPage = 1;
        this.totalRecord = 0;
        this.limit = 20;
        this.srfnodefilter = '';
    }

    /**
     * vue 生命周期
     *
     * @memberof MoreMyFavouritesTreeBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MoreMyFavouritesTreeBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 刷新功能
     *
     * @param {any[]} args
     * @memberof MoreMyFavouritesTreeBase
     */
    public refresh(): void {
        const node = this.currentNode;
        this.load(node);
    }

    /**
     * 加载当前文件夹所有文件
     *
     * @param {*} node 当前文件夹对象
     * @memberof MoreMyFavouritesTreeBase
     */
    public async load(node: any = {}, resolve?: any) {
        this.loading = true;
        this.items = [];
        this.currentNode = node;
        if (node.data && node.data.children) {
            return;
        }
        const params: any = {
            srfnodeid: node.data && node.data.id ? node.data.id : "#",
            srfnodefilter: this.srfnodefilter
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        curNode = this.$util.deepObjectMerge(curNode,node);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode.data && curNode.data.srfparentdename){
            Object.assign(tempContext,{srfparentdename:curNode.data.srfparentdename});
            Object.assign(tempViewParams,{srfparentdename:curNode.data.srfparentdename});
        }
        if(curNode.data && curNode.data.srfparentkey){
            Object.assign(tempContext,{srfparentkey:curNode.data.srfparentkey});
            Object.assign(tempViewParams,{srfparentkey:curNode.data.srfparentkey});
        }
        Object.assign(params,{viewparams:tempViewParams});
        const response = await this.service.getNodes(tempContext,params)
        if (!response || response.status !== 200) {
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
            return;
        }
        const _items = response.data;
        this.items = [..._items];
        this.totalRecord = _items.length; 
        await this.computeCurPageNodeState();
        this.loading = false;
        this.$emit("load", _items);
    }

    /**
     * 搜索
     * 
     * @param query 搜索值
     * @memberof MoreMyFavouritesTreeBase
     */
    public onSearch(query: string){
        const node = this.currentNode;
        this.curPage = 1;
        this.load(node);
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof MoreMyFavouritesTreeBase
     */
    public computecurNodeContext(curNode:any) {
        let tempContext:any = {};
        if (curNode && curNode.data && curNode.data.srfappctx) {
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        } else {
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 添加面包屑数据
     * 
     * @param node 文件夹对象
     * @memberof MoreMyFavouritesTreeBase
     */
    public addBreadcrumbs(node: any) {
        if (this.breadcrumbs.length > 0) {
            const index: number = this.breadcrumbs.findIndex((item: any) => Object.is(item.srfkey, node.srfkey));
            if(index === -1){
                this.breadcrumbs.push(node);
            }
        } else {
            this.breadcrumbs.push(node);
        }
    }

    /**
     * 移除面包屑数据
     * 
     * @param node 文件夹对象
     * @memberof MoreMyFavouritesTreeBase
     */
    public removeBreadcrumbs(node: any) {
        if (this.breadcrumbs.length > 0) {
            const index: number = this.breadcrumbs.findIndex((item: any) => Object.is(item.srfkey, node.srfkey));
            if (index !== -1) {
                this.breadcrumbs.splice(index+1);
            }
        }
    }

    /**
     * 面包屑跳转文件夹
     * 
     * @param node 文件夹对象
     * @memberof MoreMyFavouritesTreeBase
     */
    public handleLink(node: any) {
        this.removeBreadcrumbs(node);
        this.srfnodefilter = '';
        this.load({data: node});
    }

    /**
     * 切换展现形式
     * 
     * @param model 展现形式
     * @memberof MoreMyFavouritesTreeBase
     */
    public modeChange(mode: string) {
        this.mode = mode;
        this.computeCurPageNodeState();
    }

    /**
     * 计算当前页显示数据(若为list模式则计算当前页的工具栏权限状态)
     * 
     * @memberof MoreMyFavouritesTreeBase
     */
    public async computeCurPageNodeState(){
        this.curPageItems = [];
        let curPageItems: Array<any> = [];
        const start = (this.curPage-1) * this.limit;
        let end = this.curPage * this.limit;
        end = end > this.items.length ? this.items.length : end;
        curPageItems = this.items.slice(start,end);
        if (Object.is(this.mode,'list')) {
            await this.computeAllNodeState(curPageItems);
        }
        this.curPageItems = [...curPageItems];
    }

    /**
     * 打开目标文件
     * 
     * @param file 目标文件
     * @memberof MoreMyFavouritesTreeBase
     */
    public openNode(node: any) {
        this.addBreadcrumbs(node);
        this.srfnodefilter = '';
        this.load({data: node});
    }

    /**
     * 计算指定文件的工具栏状态
     * 
     * @memberof MoreMyFavouritesTreeBase
     */
    public async computeAllNodeState(items: Array<any>) {
        if (items && items.length > 0) {
            for (let i=0; i < items.length; i++) {
                if (!items[i].curData || !items[i].curData.copyActionModel) {
                    await this.getNodeState(items[i]);
                }
            }
        }
    }

    /**
     * 获取当前文件夹指定文件的工具栏状态
     * 
     * @param node 指定的文件对象
     * @memberof MoreMyFavouritesTreeBase
     */
    public async getNodeState(node: any) {
        this.copyActionModel = {};
        const tags: string[] = node.id.split(';');
        Object.values(this.actionModel).forEach((item:any) =>{
            if(Object.is(item.nodeOwner,tags[0])){
                this.copyActionModel[item.name] = item;
            }
        })
        if(Object.keys(this.copyActionModel).length === 0){
            return;
        }
        const result = await this.computeNodeState(node,node.nodeType,node.appEntityName)
        if(Object.values(result).length>0){
            node.curData.copyActionModel = JSON.parse(JSON.stringify(this.copyActionModel));
        }
    }

    /**
     * 计算文件的工具栏状态
     *
     * @param {*} node 指定的文件对象
     * @param {*} nodeType 指定的文件类型
     * @param {*} appEntityName 应用实体名称  
     * @returns
     * @memberof MoreMyFavouritesTreeBase
     */
    public async computeNodeState(node: any, nodeType: string, appEntityName: string) {
        if(Object.is(nodeType,"STATIC")){
            return this.copyActionModel;
        }
        if(this.copyActionModel && Object.keys(this.copyActionModel).length > 0) {
            let tempContext:any = this.$util.deepCopy(this.context);
            tempContext[appEntityName] = node.srfkey;
            let targetData = node.curData;
            let uiservice:any = await this.appUIService.getService(appEntityName);
            let result: any[] = ViewTool.calcActionItemAuthState(targetData,this.copyActionModel,uiservice);
            return this.copyActionModel;
        }
    }

    /**
     * 图表模式下工具栏的显示
     *
     * @param {*} index 工具栏标识
     * @memberof MoreMyFavouritesTreeBase
     */
    public async showToolBar(item: any,index: number){
        if(!item.curData || !item.curData.copyActionModel){
            await this.getNodeState(item);
            this.$forceUpdate();
        }
        let el: any = this.$el.getElementsByClassName('chart-item-operate')[index];
        if (el) {
            el.style.display = 'block'; 
        }
    }

    /**
     * 图表模式下工具栏的隐藏
     *
     * @param {*} index 工具栏标识
     * @memberof MoreMyFavouritesTreeBase
     */
    public hideToolBar(index: number){
        let el: any = this.$el.getElementsByClassName('chart-item-operate')[index];
        if (el) {
            el.style.display = 'none'; 
        }
    }

    /**
     * 页面变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof GridControlBase
     */
    public pageOnChange($event: any): void {
        if (!$event || $event === this.curPage) {
            return;
        }
        this.curPage = $event;
        this.computeCurPageNodeState();
    }

    /**
     * 分页条数变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof MoreMyFavouritesTreeBase
     */
    public onPageSizeChange($event: any): void {
        if (!$event || $event === this.limit) {
            return;
        }
        this.limit = $event;
        this.computeCurPageNodeState();
    }

    /**
     * 分页刷新
     *
     * @memberof GridControlBase
     */
    public pageRefresh(): void {
        const node = this.currentNode;
        this.load(node);
    }

    /**
     * 工具栏触发行为
     *
     * @param {*} item 触发行为文件对象
     * @param {*} tag 触发行为标识
     * @memberof MoreMyFavouritesTreeBase
     */
    public onAction(item: any,ctrlname: string,tag: string) {
        let _this:any = this;
        this.currentselectedNode = JSON.parse(JSON.stringify(item));
        if (Object.is('rootdir_cm',ctrlname) && _this.rootdir_cm_click && _this.rootdir_cm_click instanceof Function) {
            _this.rootdir_cm_click({ tag: tag });
        }           
        if (Object.is('doc_cm',ctrlname) && _this.doc_cm_click && _this.doc_cm_click instanceof Function) {
            _this.doc_cm_click({ tag: tag });
        }           
        if (Object.is('doclib_cm',ctrlname) && _this.doclib_cm_click && _this.doclib_cm_click instanceof Function) {
            _this.doclib_cm_click({ tag: tag });
        }           
        if (Object.is('module_cm',ctrlname) && _this.module_cm_click && _this.module_cm_click instanceof Function) {
            _this.module_cm_click({ tag: tag });
        }           
        if (Object.is('doclibdoc_cm',ctrlname) && _this.doclibdoc_cm_click && _this.doclibdoc_cm_click instanceof Function) {
            _this.doclibdoc_cm_click({ tag: tag });
        }           
        if (Object.is('childdir_cm',ctrlname) && _this.childdir_cm_click && _this.childdir_cm_click instanceof Function) {
            _this.childdir_cm_click({ tag: tag });
        }           
        if (Object.is('moduledoc_cm',ctrlname) && _this.moduledoc_cm_click && _this.moduledoc_cm_click instanceof Function) {
            _this.moduledoc_cm_click({ tag: tag });
        }           
    }

}