import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import CustomTreeExpView_9296treeexpbarService from './custom-tree-exp-view-9296treeexpbar-treeexpbar-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {CustomTreeExpView_9296treeexpbarTreeExpBarBase}
 */
export class CustomTreeExpView_9296treeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CustomTreeExpView_9296treeexpbarService}
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    public service: CustomTreeExpView_9296treeexpbarService = new CustomTreeExpView_9296treeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof CustomTreeExpView_9296treeexpbarBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CustomTreeExpView_9296treeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof CustomTreeExpView_9296treeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof CustomTreeExpView_9296treeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'CHILDDOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-custom-doc-lib-child-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'DOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-custom-doc-lib-child-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'DOCLIB')) {
            return {  
                viewname: 'doc-lib-custom-doc-lib-root-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'doc-lib-product-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof CustomTreeExpView_9296treeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("customtreeexpview_9296treeexpbar") as any).offsetWidth;
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
     * @memberof CustomTreeExpView_9296treeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}