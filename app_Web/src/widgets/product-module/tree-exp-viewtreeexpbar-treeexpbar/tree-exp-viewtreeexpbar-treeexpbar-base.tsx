import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import ProductModuleService from '@/service/product-module/product-module-service';
import TreeExpViewtreeexpbarService from './tree-exp-viewtreeexpbar-treeexpbar-service';
import ProductModuleUIService from '@/uiservice/product-module/product-module-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {TreeExpViewtreeexpbarTreeExpBarBase}
 */
export class TreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {TreeExpViewtreeexpbarService}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: TreeExpViewtreeexpbarService = new TreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductModuleService}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: ProductModuleService = new ProductModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'productmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '需求模块';

    /**
     * 界面UI服务对象
     *
     * @type {ProductModuleUIService}
     * @memberof TreeExpViewtreeexpbarBase
     */  
    public appUIService: ProductModuleUIService = new ProductModuleUIService(this.$store);

    /**
     * treeexpbar_toolbar 部件 click 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_toolbar_click($event: any, $event2?: any) {
        if (Object.is($event.tag, 'deuiaction1')) {
            this.treeexpbar_toolbar_deuiaction1_click(null, 'treeexpbar_toolbar', $event2);
        }
        if (Object.is($event.tag, 'deuiaction2')) {
            this.treeexpbar_toolbar_deuiaction2_click(null, 'treeexpbar_toolbar', $event2);
        }
    }

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public treeexpbar_toolbar_deuiaction1_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.treeexpbar_tree;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        const curUIService:ProductModuleUIService  = new ProductModuleUIService();
        curUIService.ProductModule_Fix(datas,contextJO, paramJO,  $event, xData,this,"ProductModule");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public treeexpbar_toolbar_deuiaction2_click(params: any = {}, tag?: any, $event?: any) {
        // 参数
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        let contextJO:any = {};
        xData = this.$refs.treeexpbar_tree;
        if (xData.getDatas && xData.getDatas instanceof Function) {
            datas = [...xData.getDatas()];
        }
        if(params){
          datas = [params];
        }
        // 界面行为
        this.RefreshAll(datas, contextJO,paramJO,  $event, xData,this,"ProductModule");
    }

    /**
     * 刷新
     *
     * @param {any[]} args 当前数据
     * @param {any} contextJO 行为附加上下文
     * @param {*} [params] 附加参数
     * @param {*} [$event] 事件源
     * @param {*} [xData]  执行行为所需当前部件
     * @param {*} [actionContext]  执行行为上下文
     * @memberof ProductModuleTreeExpViewBase
     */
    public RefreshAll(args: any[],contextJO?:any, params?: any, $event?: any, xData?: any,actionContext?:any,srfParentDeName?:string) {
        if (xData && xData.refresh_all && xData.refresh_all instanceof Function) {
            xData.refresh_all();
            return;
        }
        const _this: any = this;
        if (_this.refresh_all && _this.refresh_all instanceof Function) {
            _this.refresh_all();
            return;
        }
        if (_this.engine) {
            _this.engine.load();
        }
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof TreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof TreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'ROOT_NOBRANCH')) {
            return {  
                viewname: 'product-module-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'productmodule'
			};
        }
        if (Object.is(expmode, 'MODULE')) {
            return {  
                viewname: 'product-module-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'productmodule'
			};
        }
        if (Object.is(expmode, 'BRANCHS')) {
            return {  
                viewname: 'product-module-grid-view-branch', 
                parentdata: {"srfparentdefname":"n_branch_eq"},
                deKeyField:'productmodule'
			};
        }
        if (Object.is(expmode, 'BRANCH')) {
            return {  
                viewname: 'product-module-grid-view-branch', 
                parentdata: {},
                deKeyField:'productmodule'
			};
        }
        if (Object.is(expmode, 'ROOTMODULE')) {
            return {  
                viewname: 'product-module-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'productmodule'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'product-module-grid-view', 
                parentdata: {},
                deKeyField:'productmodule'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof TreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("treeexpviewtreeexpbar") as any).offsetWidth;
            if(this.ctrlWidth){
                    this.split = this.ctrlWidth/containerWidth;
            }
            this.$store.commit("setViewSplit",{viewUID:this.viewUID,viewSplit:this.split}); 
        }  
    }

    /**
     * 视图数据加载完成
     *
     * @param {*} $event
     * @memberof TreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }

        /**
     * 工具栏模型
     *
     * @type {*}
     * @memberof ProductModuleTreeExpView
     */
    public treeexpviewtreeexpbar_toolbarModels: any = {
        deuiaction1: { name: 'deuiaction1', caption: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction1.tip', iconcls: 'fa fa-wrench', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'Fix', target: 'NONE', class: '' } },

        deuiaction2: { name: 'deuiaction2', caption: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.caption', 'isShowCaption': true, 'isShowIcon': true, tooltip: 'entities.productmodule.treeexpviewtreeexpbar_toolbar_toolbar.deuiaction2.tip', iconcls: 'fa fa-refresh', icon: '', disabled: false, type: 'DEUIACTION', visible: true,noprivdisplaymode:2,dataaccaction: '', uiaction: { tag: 'RefreshAll', target: '', class: '' } },

    };

}