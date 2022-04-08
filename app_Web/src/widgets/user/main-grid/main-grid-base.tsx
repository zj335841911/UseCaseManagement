import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import UserService from '@/service/user/user-service';
import MainService from './main-grid-service';
import UserUIService from '@/uiservice/user/user-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainGridBase}
 */
export class MainGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainGridBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {UserService}
     * @memberof MainGridBase
     */
    public appEntityService: UserService = new UserService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'user';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '用户';

    /**
     * 界面UI服务对象
     *
     * @type {UserUIService}
     * @memberof MainBase
     */  
    public appUIService:UserUIService = new UserUIService(this.$store);

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u6b478ff_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:UserUIService  = new UserUIService();
        curUIService.User_Edit(datas,contextJO, paramJO,  $event, xData,this,"User");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    public grid_uagridcolumn1_u3ae1ca0_click(params: any = {}, tag?: any, $event?: any) {
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
        const curUIService:UserUIService  = new UserUIService();
        curUIService.User_Delete(datas,contextJO, paramJO,  $event, xData,this,"User");
    }


    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof MainBase
     */  
    public ActionModel: any = {
        Edit: { name: 'Edit',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__ADMIN', actiontarget: 'SINGLEKEY'},
        Delete: { name: 'Delete',disabled: false, visabled: true,noprivdisplaymode:1,dataaccaction: 'SRFUR__ADMIN', actiontarget: 'SINGLEKEY'}
    };

    /**
     * 主信息表格列
     *
     * @type {string}
     * @memberof MainBase
     */  
    public majorInfoColName:string = "realname";

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof MainBase
     */
    protected localStorageTag: string = 'zt_user_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'id',
            label: 'ID',
            langtag: 'entities.user.main_grid.columns.id',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'realname',
            label: '真实姓名',
            langtag: 'entities.user.main_grid.columns.realname',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'account',
            label: '账户',
            langtag: 'entities.user.main_grid.columns.account',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'role',
            label: '职位',
            langtag: 'entities.user.main_grid.columns.role',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'email',
            label: '邮箱',
            langtag: 'entities.user.main_grid.columns.email',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'gender',
            label: '性别',
            langtag: 'entities.user.main_grid.columns.gender',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'phone',
            label: '电话',
            langtag: 'entities.user.main_grid.columns.phone',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'qq',
            label: 'QQ',
            langtag: 'entities.user.main_grid.columns.qq',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'address',
            label: '通讯地址',
            langtag: 'entities.user.main_grid.columns.address',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'last',
            label: '最后登录',
            langtag: 'entities.user.main_grid.columns.last',
            show: false,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'visits',
            label: '访问次数',
            langtag: 'entities.user.main_grid.columns.visits',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'uagridcolumn1',
            label: '操作',
            langtag: 'entities.user.main_grid.columns.uagridcolumn1',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainGridBase
     */
    public getGridRowModel(){
        return {
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'id':false,
        'realname':false,
        'account':false,
        'role':false,
        'email':false,
        'gender':false,
        'phone':false,
        'qq':false,
        'address':false,
        'last':false,
        'visits':false,
        'uagridcolumn1':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainBase
     */
    public getCellClassName(args: {row: any, column: any, rowIndex: number, columnIndex: number}): any {
        return ( this.hasRowEdit[args.column.property] && this.actualIsOpenEdit ) ? "edit-cell" : "info-cell";
    }


    /**
     * 导出数据格式化
     *
     * @param {*} filterVal
     * @param {*} jsonData
     * @param {any[]} [codelistColumns=[]]
     * @returns {Promise<any>}
     * @memberof MainGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'role',
                srfkey: 'Role',
                codelistType : 'DYNAMIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
            {
                name: 'gender',
                srfkey: 'User__gender',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }


    /**
     * 界面行为
     *
     * @param {*} row
     * @param {*} tag
     * @param {*} $event
     * @memberof MainGridBase
     */
	public uiAction(row: any, tag: any, $event: any): void {
        $event.stopPropagation();
        if(Object.is('Edit', tag)) {
            this.grid_uagridcolumn1_u6b478ff_click(row, tag, $event);
        }
        if(Object.is('Delete', tag)) {
            this.grid_uagridcolumn1_u3ae1ca0_click(row, tag, $event);
        }
    }

    /**
     * 更新默认值
     * @param {*}  row 行数据
     * @memberof MainBase
     */
    public updateDefault(row: any){                    
    }

    /**
     * 计算数据对象类型的默认值
     * @param {string}  action 行为
     * @param {string}  param 默认值参数
     * @param {*}  data 当前行数据
     * @memberof MainBase
     */
    public computeDefaultValueWithParam(action:string,param:string,data:any){
        if(Object.is(action,"UPDATE")){
            const nativeData:any = this.service.getCopynativeData();
            if(nativeData && (nativeData instanceof Array) && nativeData.length >0){
                let targetData:any = nativeData.find((item:any) =>{
                    return item.id === data.srfkey;
                })
                if(targetData){
                    return targetData[param]?targetData[param]:null;
                }else{
                    return null;
                }
            }else{
                return null;
            }
        }else{
           return this.service.getRemoteCopyData()[param]?this.service.getRemoteCopyData()[param]:null;
        }
    }


}