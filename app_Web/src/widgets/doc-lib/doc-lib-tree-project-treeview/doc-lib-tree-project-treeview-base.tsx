import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import DocLibTreeProjectService from './doc-lib-tree-project-treeview-service';
import FileUIService from '@/uiservice/file/file-ui-service';
import DocLibModuleUIService from '@/uiservice/doc-lib-module/doc-lib-module-ui-service';
import DocUIService from '@/uiservice/doc/doc-ui-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';
import { Environment } from '@/environments/environment';

/**
 * tree部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {DocLibTreeProjectTreeBase}
 */
export class DocLibTreeProjectTreeBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProjectTreeBase
     */
    protected controlType: string = 'TREEVIEW';

    /**
     * 建构部件服务对象
     *
     * @type {DocLibTreeProjectService}
     * @memberof DocLibTreeProjectTreeBase
     */
    public service: DocLibTreeProjectService = new DocLibTreeProjectService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof DocLibTreeProjectTreeBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProjectTreeBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof DocLibTreeProjectTreeBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof DocLibTreeProjectBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * childdoclibmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
     */
    public childdoclibmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.childdoclibmodule_cm_deuiaction1_click(null, 'childdoclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.childdoclibmodule_cm_deuiaction4_click(null, 'childdoclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.childdoclibmodule_cm_deuiaction2_click(null, 'childdoclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.childdoclibmodule_cm_deuiaction3_click(null, 'childdoclibmodule_cm', $event2);
        }
    }

    /**
     * doclib_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
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
     * doclibdoc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
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
     * doclibmodule_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
     */
    public doclibmodule_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.doclibmodule_cm_deuiaction1_click(null, 'doclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction4')) {
            this.doclibmodule_cm_deuiaction4_click(null, 'doclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.doclibmodule_cm_deuiaction2_click(null, 'doclibmodule_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.doclibmodule_cm_deuiaction3_click(null, 'doclibmodule_cm', $event2);
        }
    }

    /**
     * moduledoc_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
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
     * file_cm 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof DocLibTreeProjectTreeBase
     */
    public file_cm_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction2')) {
            this.file_cm_deuiaction2_click(null, 'file_cm', $event2);
        }
        if (Object.is($event.tag, 'deuiaction3')) {
            this.file_cm_deuiaction3_click(null, 'file_cm', $event2);
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
    public file_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:FileUIService  = new FileUIService();
        curUIService.File_ibzdownload(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public file_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:FileUIService  = new FileUIService();
        curUIService.File_delete(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibmodule_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibmodule_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public doclibmodule_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibmodule_cm_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibmodule_cm_deuiaction4_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibmodule_cm_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_Favorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public childdoclibmodule_cm_deuiaction3_click(params: any = {}, tag?: any, $event?: any) {
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
        curUIService.DocLibModule_NFavorite(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_OnlyCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_OnlyUnCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_DocInfo(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.DocLib_EditDocLib(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.DocLib_WeiHuFenLei(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.DocLib_UnCollect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.DocLib_Collect(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_Edit(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_Delete(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_OnlyCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_OnlyUnCollectDoc(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
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
        curUIService.Doc_DocInfo(datas,contextJO, paramJO,  $event, xData,this,"DocLib");
    }


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof DocLibTreeProjectBase
     */
    public getDatas(): any[] {
        return [this.currentselectedNode];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof DocLibTreeProjectBase
     */
    public getData(): any {
        return this.currentselectedNode;
    }

    /**
     * 当前选中数据项
     *
     * @type {*}
     * @memberof DocLibTreeProjectBase
     */
    public currentselectedNode: any = {};

    /**
     * 备份行为模型
     * 
     * @type any
     * @memberof DocLibTreeProjectBase
     */
    public copyActionModel: any = {};

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    @Prop() public fetchAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    @Prop() public loadAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    @Prop() public createAction!: string;

    /**
     * 过滤值
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    public srfnodefilter: string = '';

    /**
     * 当前文件夹所有符合条件的文件
     *  
     * @type {Array<any>}
     * @memberof DocLibTreeProjectBase
     */
    public items: any[] = [];

    /**
     * loading状态
     *  
     * @type {Boolean}
     * @memberof DocLibTreeProjectBase
     */
    public loading: boolean = false;

    /**
     * 面包屑数据(默认第一项为图标)
     * 
     * @type {Array<any>}
     * @memberof DocLibTreeProjectBase
     */
    public breadcrumbs: Array<any> = [{curData: ''}];

    /**
     * 展现形式(默认为图表)
     * 
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    public mode: string = 'chart';

    /**
     * 当前文件夹
     *
     * @type {*}
     * @memberofDocLibTreeProjectBase
     */
    public currentNode = {};

    /**
     * 分页条数默认20
     *
     * @type {number}
     * @memberof DocLibTreeProjectBase
     */
    public limit: number = 20;

    /**
     * 总条数默认0
     *
     * @type {number}
     * @memberof DocLibTreeProjectBase
     */
    public totalRecord: number = 0;

    /**
     * 当前页默认1
     *
     * @type {number}
     * @memberof DocLibTreeProjectBase
     */
    public curPage: number = 1;

    /**
     * 当前页数据
     *
     * @type {Array<any>}
     * @memberof DocLibTreeProjectBase
     */
    public curPageItems: any[] = [];

    /**
     * 图片加载路径
     *
     * @type {string}
     * @memberof DocLibTreeProjectBase
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

    /**
     * 树节点上下文菜单集合
     *
     * @type {string[]}
     * @memberof DocLibTreeProjectBase
     */
     public actionModel: any = {
        ChildDocLibModule_deuiaction1: {ctrlname: 'childdoclibmodule_cm',name:'deuiaction1',nodeOwner:'ChildDocLibModule',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_edit'},
        ChildDocLibModule_deuiaction4: {ctrlname: 'childdoclibmodule_cm',name:'deuiaction4',nodeOwner:'ChildDocLibModule',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_weihufenlei'},
        ChildDocLibModule_deuiaction2: {ctrlname: 'childdoclibmodule_cm',name:'deuiaction2',nodeOwner:'ChildDocLibModule',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_favorite'},
        ChildDocLibModule_deuiaction3: {ctrlname: 'childdoclibmodule_cm',name:'deuiaction3',nodeOwner:'ChildDocLibModule',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_nfavorite'},
        DocLib_deuiaction1: {ctrlname: 'doclib_cm',name:'deuiaction1',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'EditDocLib', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclib_editdoclib'},
        DocLib_deuiaction2: {ctrlname: 'doclib_cm',name:'deuiaction2',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclib_weihufenlei'},
        DocLib_deuiaction3: {ctrlname: 'doclib_cm',name:'deuiaction3',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'UnCollect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclib_uncollect'},
        DocLib_deuiaction4: {ctrlname: 'doclib_cm',name:'deuiaction4',nodeOwner:'DocLib',type: 'DEUIACTION', tag: 'Collect', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIB_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclib_collect'},
        DocLibDoc_deuiaction1: {ctrlname: 'doclibdoc_cm',name:'deuiaction1',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_edit'},
        DocLibDoc_deuiaction4: {ctrlname: 'doclibdoc_cm',name:'deuiaction4',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'Delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_delete'},
        DocLibDoc_deuiaction2: {ctrlname: 'doclibdoc_cm',name:'deuiaction2',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'OnlyCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_onlycollectdoc'},
        DocLibDoc_deuiaction3: {ctrlname: 'doclibdoc_cm',name:'deuiaction3',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'OnlyUnCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_onlyuncollectdoc'},
        DocLibDoc_deuiaction5: {ctrlname: 'doclibdoc_cm',name:'deuiaction5',nodeOwner:'DocLibDoc',type: 'DEUIACTION', tag: 'DocInfo', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-eye',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_docinfo'},
        DocLibModule_deuiaction1: {ctrlname: 'doclibmodule_cm',name:'deuiaction1',nodeOwner:'DocLibModule',type: 'DEUIACTION', tag: 'edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_edit'},
        DocLibModule_deuiaction4: {ctrlname: 'doclibmodule_cm',name:'deuiaction4',nodeOwner:'DocLibModule',type: 'DEUIACTION', tag: 'WeiHuFenLei', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_MAINTENANCE_BUT', visible: true, disabled: false,imgclass: 'fa fa-lock',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_weihufenlei'},
        DocLibModule_deuiaction2: {ctrlname: 'doclibmodule_cm',name:'deuiaction2',nodeOwner:'DocLibModule',type: 'DEUIACTION', tag: 'Favorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_favorite'},
        DocLibModule_deuiaction3: {ctrlname: 'doclibmodule_cm',name:'deuiaction3',nodeOwner:'DocLibModule',type: 'DEUIACTION', tag: 'NFavorite', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOCLIBMODULE_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doclibmodule_nfavorite'},
        ModuleDoc_deuiaction1: {ctrlname: 'moduledoc_cm',name:'deuiaction1',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'Edit', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_EDIT_BUT', visible: true, disabled: false,imgclass: 'fa fa-edit',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_edit'},
        ModuleDoc_deuiaction4: {ctrlname: 'moduledoc_cm',name:'deuiaction4',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'Delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_delete'},
        ModuleDoc_deuiaction2: {ctrlname: 'moduledoc_cm',name:'deuiaction2',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'OnlyCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_FAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star-o',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_onlycollectdoc'},
        ModuleDoc_deuiaction3: {ctrlname: 'moduledoc_cm',name:'deuiaction3',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'OnlyUnCollectDoc', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__DOC_NFAVOUR_BUT', visible: true, disabled: false,imgclass: 'fa fa-star',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_onlyuncollectdoc'},
        ModuleDoc_deuiaction5: {ctrlname: 'moduledoc_cm',name:'deuiaction5',nodeOwner:'ModuleDoc',type: 'DEUIACTION', tag: 'DocInfo', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, visible: true, disabled: false,imgclass: 'fa fa-eye',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.doc_docinfo'},
        File_deuiaction2: {ctrlname: 'file_cm',name:'deuiaction2',nodeOwner:'File',type: 'DEUIACTION', tag: 'ibzdownload', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__FILE_DOWNLOAD_BUT', visible: true, disabled: false,imgclass: 'fa fa-download',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.file_ibzdownload'},
        File_deuiaction3: {ctrlname: 'file_cm',name:'deuiaction3',nodeOwner:'File',type: 'DEUIACTION', tag: 'delete', actiontarget: 'SINGLEKEY', noprivdisplaymode:2, dataaccaction:'SRFUR__FILE_DELETE_BUT', visible: true, disabled: false,imgclass: 'fa fa-remove',caption: '',title:'entities.doclib.doclibtreeproject_treeview.uiactions.file_delete'},
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof DocLibTreeProjectBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
     */
    public refresh(): void {
        const node = this.currentNode;
        this.load(node);
    }

    /**
     * 加载当前文件夹所有文件
     *
     * @param {*} node 当前文件夹对象
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
     */
    public modeChange(mode: string) {
        this.mode = mode;
        this.computeCurPageNodeState();
    }

    /**
     * 计算当前页显示数据(若为list模式则计算当前页的工具栏权限状态)
     * 
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
     */
    public openNode(node: any) {
        this.addBreadcrumbs(node);
        this.srfnodefilter = '';
        this.load({data: node});
    }

    /**
     * 计算指定文件的工具栏状态
     * 
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
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
     * @memberof DocLibTreeProjectBase
     */
    public onAction(item: any,ctrlname: string,tag: string) {
        let _this:any = this;
        this.currentselectedNode = JSON.parse(JSON.stringify(item));
        if (Object.is('childdoclibmodule_cm',ctrlname) && _this.childdoclibmodule_cm_click && _this.childdoclibmodule_cm_click instanceof Function) {
            _this.childdoclibmodule_cm_click({ tag: tag });
        }           
        if (Object.is('doclib_cm',ctrlname) && _this.doclib_cm_click && _this.doclib_cm_click instanceof Function) {
            _this.doclib_cm_click({ tag: tag });
        }           
        if (Object.is('doclibdoc_cm',ctrlname) && _this.doclibdoc_cm_click && _this.doclibdoc_cm_click instanceof Function) {
            _this.doclibdoc_cm_click({ tag: tag });
        }           
        if (Object.is('doclibmodule_cm',ctrlname) && _this.doclibmodule_cm_click && _this.doclibmodule_cm_click instanceof Function) {
            _this.doclibmodule_cm_click({ tag: tag });
        }           
        if (Object.is('moduledoc_cm',ctrlname) && _this.moduledoc_cm_click && _this.moduledoc_cm_click instanceof Function) {
            _this.moduledoc_cm_click({ tag: tag });
        }           
        if (Object.is('file_cm',ctrlname) && _this.file_cm_click && _this.file_cm_click instanceof Function) {
            _this.file_cm_click({ tag: tag });
        }           
    }

}