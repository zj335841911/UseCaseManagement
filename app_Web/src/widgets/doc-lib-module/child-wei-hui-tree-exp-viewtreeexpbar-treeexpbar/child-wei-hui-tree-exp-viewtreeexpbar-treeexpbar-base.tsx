import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import DocLibModuleService from '@/service/doc-lib-module/doc-lib-module-service';
import ChildWeiHuiTreeExpViewtreeexpbarService from './child-wei-hui-tree-exp-viewtreeexpbar-treeexpbar-service';
import DocLibModuleUIService from '@/uiservice/doc-lib-module/doc-lib-module-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ChildWeiHuiTreeExpViewtreeexpbarService}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: ChildWeiHuiTreeExpViewtreeexpbarService = new ChildWeiHuiTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibModuleService}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: DocLibModuleService = new DocLibModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'doclibmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '文档库分类';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibModuleUIService}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarBase
     */  
    public appUIService: DocLibModuleUIService = new DocLibModuleUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'MODULE')) {
            return {  
                viewname: 'doc-lib-module-usr2-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'doclibmodule'
			};
        }
        if (Object.is(expmode, 'ALLMODULE')) {
            return {  
                viewname: 'doc-lib-module-usr2-grid-view', 
                parentdata: {},
                deKeyField:'doclibmodule'
			};
        }
        if (Object.is(expmode, 'CHILEMODULE')) {
            return {  
                viewname: 'doc-lib-module-usr2-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'doclibmodule'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof ChildWeiHuiTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("childweihuitreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof ChildWeiHuiTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}