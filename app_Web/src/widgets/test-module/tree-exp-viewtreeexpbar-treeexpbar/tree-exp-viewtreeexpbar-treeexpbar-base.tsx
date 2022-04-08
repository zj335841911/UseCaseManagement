import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import TestModuleService from '@/service/test-module/test-module-service';
import TreeExpViewtreeexpbarService from './tree-exp-viewtreeexpbar-treeexpbar-service';
import TestModuleUIService from '@/uiservice/test-module/test-module-ui-service';

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
     * @type {TestModuleService}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: TestModuleService = new TestModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'testmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '测试模块';

    /**
     * 界面UI服务对象
     *
     * @type {TestModuleUIService}
     * @memberof TreeExpViewtreeexpbarBase
     */  
    public appUIService: TestModuleUIService = new TestModuleUIService(this.$store);

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
                viewname: 'test-module-grid-view-main', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'testmodule'
			};
        }
        if (Object.is(expmode, 'MODULE')) {
            return {  
                viewname: 'test-module-grid-view-main', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'testmodule'
			};
        }
        if (Object.is(expmode, 'BRANCHS')) {
            return {  
                viewname: 'test-module-grid-view-branch', 
                parentdata: {"srfparentdefname":"n_branch_eq"},
                deKeyField:'testmodule'
			};
        }
        if (Object.is(expmode, 'BRANCH')) {
            return {  
                viewname: 'test-module-grid-view-branch', 
                parentdata: {},
                deKeyField:'testmodule'
			};
        }
        if (Object.is(expmode, 'ROOTMODULE')) {
            return {  
                viewname: 'test-module-grid-view-main', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'testmodule'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'test-module-grid-view-main', 
                parentdata: {},
                deKeyField:'testmodule'
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
}