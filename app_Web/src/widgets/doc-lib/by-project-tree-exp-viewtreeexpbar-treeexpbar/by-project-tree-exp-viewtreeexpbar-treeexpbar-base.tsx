import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import DocLibService from '@/service/doc-lib/doc-lib-service';
import ByProjectTreeExpViewtreeexpbarService from './by-project-tree-exp-viewtreeexpbar-treeexpbar-service';
import DocLibUIService from '@/uiservice/doc-lib/doc-lib-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {ByProjectTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class ByProjectTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {ByProjectTreeExpViewtreeexpbarService}
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: ByProjectTreeExpViewtreeexpbarService = new ByProjectTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {DocLibService}
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: DocLibService = new DocLibService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'doclib';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '文档库';

    /**
     * 界面UI服务对象
     *
     * @type {DocLibUIService}
     * @memberof ByProjectTreeExpViewtreeexpbarBase
     */  
    public appUIService: DocLibUIService = new DocLibUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ByProjectTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof ByProjectTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof ByProjectTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'FILES')) {
            return {  
                viewname: 'file-project-grid-view-file', 
                parentdata: {},
                deKeyField:'file'
			};
        }
        if (Object.is(expmode, 'CHILDDOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-usr3-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'DOCLIBMODULE')) {
            return {  
                viewname: 'doc-lib-usr3-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'DOCLIB')) {
            return {  
                viewname: 'doc-lib-usr2-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'doc-lib-project-tree-view', 
                parentdata: {},
                deKeyField:'doclib'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof ByProjectTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("byprojecttreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof ByProjectTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}