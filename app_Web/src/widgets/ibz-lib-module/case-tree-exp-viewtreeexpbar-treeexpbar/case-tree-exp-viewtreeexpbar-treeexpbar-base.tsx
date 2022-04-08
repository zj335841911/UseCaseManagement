import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import IbzLibModuleService from '@/service/ibz-lib-module/ibz-lib-module-service';
import CaseTreeExpViewtreeexpbarService from './case-tree-exp-viewtreeexpbar-treeexpbar-service';
import IbzLibModuleUIService from '@/uiservice/ibz-lib-module/ibz-lib-module-ui-service';

/**
 * treeexpbar部件基类
 *
 * @export
 * @class TreeExpBarControlBase
 * @extends {CaseTreeExpViewtreeexpbarTreeExpBarBase}
 */
export class CaseTreeExpViewtreeexpbarTreeExpBarBase extends TreeExpBarControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected controlType: string = 'TREEEXPBAR';

    /**
     * 建构部件服务对象
     *
     * @type {CaseTreeExpViewtreeexpbarService}
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    public service: CaseTreeExpViewtreeexpbarService = new CaseTreeExpViewtreeexpbarService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzLibModuleService}
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: IbzLibModuleService = new IbzLibModuleService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'ibzlibmodule';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '用例库模块';

    /**
     * 界面UI服务对象
     *
     * @type {IbzLibModuleUIService}
     * @memberof CaseTreeExpViewtreeexpbarBase
     */  
    public appUIService: IbzLibModuleUIService = new IbzLibModuleUIService(this.$store);

    /**
     * treeexpbar_tree 部件 selectionchange 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_selectionchange($event: any, $event2?: any) {
        this.treeexpbar_selectionchange($event, 'treeexpbar_tree', $event2);
    }

    /**
     * treeexpbar_tree 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof CaseTreeExpViewtreeexpbarTreeExpBarBase
     */
    public treeexpbar_tree_load($event: any, $event2?: any) {
        this.treeexpbar_load($event, 'treeexpbar_tree', $event2);
    }


    /**
     * 控件宽度
     *
     * @type {number}
     * @memberof CaseTreeExpViewtreeexpbarBase
     */
    public ctrlWidth:number = 0;

    /**
     * 获取关系项视图
     *
     * @param {*} [arg={}]
     * @returns {*}
     * @memberof CaseTreeExpViewtreeexpbarBase
     */
    public getExpItemView(arg: any = {}): any {
        let expmode = arg.nodetype.toUpperCase();
        if (!expmode) {
            expmode = '';
        }
        if (Object.is(expmode, 'LIBROOT')) {
            return {  
                viewname: 'ibz-case-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'ibzcase'
			};
        }
        if (Object.is(expmode, 'CHILDMODULE')) {
            return {  
                viewname: 'ibz-case-grid-view', 
                parentdata: {"srfparentdefname":"n_parent_eq"},
                deKeyField:'ibzcase'
			};
        }
        if (Object.is(expmode, 'ALL')) {
            return {  
                viewname: 'ibz-case-grid-view', 
                parentdata: {},
                deKeyField:'ibzcase'
			};
        }
        return null;
    }

    /**
    * 执行mounted后的逻辑
    *
    * @memberof CaseTreeExpViewtreeexpbarBase
    */
    public ctrlMounted(){ 
        if(this.$store.getters.getViewSplit(this.viewUID)){
            this.split = this.$store.getters.getViewSplit(this.viewUID);
        }else{
            let containerWidth:number = (document.getElementById("casetreeexpviewtreeexpbar") as any).offsetWidth;
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
     * @memberof CaseTreeExpViewtreeexpbarBase
     */
    public onViewLoad($event: any): void {
        this.$emit('load', $event);
    }
}