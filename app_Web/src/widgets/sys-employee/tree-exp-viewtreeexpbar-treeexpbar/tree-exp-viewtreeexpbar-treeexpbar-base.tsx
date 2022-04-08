import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, TreeExpBarControlBase } from '@/studio-core';
import SysEmployeeService from '@/service/sys-employee/sys-employee-service';
import TreeExpViewtreeexpbarService from './tree-exp-viewtreeexpbar-treeexpbar-service';
import SysEmployeeUIService from '@/uiservice/sys-employee/sys-employee-ui-service';

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
     * @type {SysEmployeeService}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    public appEntityService: SysEmployeeService = new SysEmployeeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeName: string = 'sysemployee';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TreeExpViewtreeexpbarTreeExpBarBase
     */
    protected appDeLogicName: string = '人员';

    /**
     * 界面UI服务对象
     *
     * @type {SysEmployeeUIService}
     * @memberof TreeExpViewtreeexpbarBase
     */  
    public appUIService: SysEmployeeUIService = new SysEmployeeUIService(this.$store);

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
        if (Object.is(expmode, 'POST')) {
            return {  
                viewname: 'sys-post-grid-exp-view', 
                parentdata: {"srfparentdefname":"postid"},
                deKeyField:'syspost'
			};
        }
        if (Object.is(expmode, 'SYSTEAM')) {
            return {  
                viewname: 'sys-team-member-grid-exp-view-team', 
                parentdata: {"srfparentdefname":"teamid"},
                deKeyField:'systeammember'
			};
        }
        if (Object.is(expmode, 'USERCONTACT')) {
            return {  
                viewname: 'sys-employee-grid-exp-view', 
                parentdata: {},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'PROJECTTEAM')) {
            return {  
                viewname: 'sys-employee-grid-exp-view-project-member', 
                parentdata: {"srfparentdefname":"project"},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'ORGEMP')) {
            return {  
                viewname: 'sys-organization-grid-exp-view', 
                parentdata: {},
                deKeyField:'sysorganization'
			};
        }
        if (Object.is(expmode, 'ORG')) {
            return {  
                viewname: 'sys-department-grid-exp-view', 
                parentdata: {},
                deKeyField:'sysdepartment'
			};
        }
        if (Object.is(expmode, 'TEAMMEMBER')) {
            return {  
                viewname: 'sys-employee-edit-view', 
                parentdata: {},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'PROJECT')) {
            return {  
                viewname: 'project-grid-exp-view', 
                parentdata: {},
                deKeyField:'project'
			};
        }
        if (Object.is(expmode, 'DEPART')) {
            return {  
                viewname: 'sys-employee-grid-exp-view-dept', 
                parentdata: {},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'CONCATLIST')) {
            return {  
                viewname: 'user-contact-grid-exp-view', 
                parentdata: {},
                deKeyField:'usercontact'
			};
        }
        if (Object.is(expmode, 'CONTACTUSER')) {
            return {  
                viewname: 'sys-employee-edit-view', 
                parentdata: {},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'SYSPOST')) {
            return {  
                viewname: 'sys-team-member-grid-exp-view', 
                parentdata: {"srfparentdefname":"postid"},
                deKeyField:'systeammember'
			};
        }
        if (Object.is(expmode, 'IBZEMP')) {
            return {  
                viewname: 'sys-employee-edit-view', 
                parentdata: {},
                deKeyField:'sysemployee'
			};
        }
        if (Object.is(expmode, 'TEAM')) {
            return {  
                viewname: 'sys-team-grid-exp-view', 
                parentdata: {},
                deKeyField:'systeam'
			};
        }
        if (Object.is(expmode, 'PROJECTEMP')) {
            return {  
                viewname: 'sys-employee-edit-view', 
                parentdata: {},
                deKeyField:'sysemployee'
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