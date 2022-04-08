import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import IBZTaskTeamService from '@/service/ibztask-team/ibztask-team-service';
import MainEditService from './main-edit-grid-service';
import IBZTaskTeamUIService from '@/uiservice/ibztask-team/ibztask-team-ui-service';
import { FormItemModel } from '@/model/form-detail';

/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {MainEditGridBase}
 */
export class MainEditGridBase extends GridControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {MainEditService}
     * @memberof MainEditGridBase
     */
    public service: MainEditService = new MainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IBZTaskTeamService}
     * @memberof MainEditGridBase
     */
    public appEntityService: IBZTaskTeamService = new IBZTaskTeamService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected appDeName: string = 'ibztaskteam';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainEditGridBase
     */
    protected appDeLogicName: string = '任务团队';

    /**
     * 界面UI服务对象
     *
     * @type {IBZTaskTeamUIService}
     * @memberof MainEditBase
     */  
    public appUIService: IBZTaskTeamUIService = new IBZTaskTeamUIService(this.$store);

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'ibz_taskteam_mainedit_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof MainEditGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof MainEditGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof MainEditGridBase
     */
    public minorSortPSDEF: string = 'id';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof MainEditGridBase
     */
    public limit: number = 100;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainEditGridBase
     */
    public allColumns: any[] = [
        {
            name: 'account',
            property: 'account',
            label: '用户',
            langtag: 'entities.ibztaskteam.mainedit_grid.columns.account',
            show: true,
            util: 'STAR',
            width: 100,
            codelistId: 'UserRealNameTask'
        },
        {
            name: 'estimate',
            property: 'estimate',
            label: '预计',
            langtag: 'entities.ibztaskteam.mainedit_grid.columns.estimate',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'consumed',
            property: 'consumed',
            label: '总计消耗',
            langtag: 'entities.ibztaskteam.mainedit_grid.columns.consumed',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'left',
            property: 'left',
            label: '预计剩余',
            langtag: 'entities.ibztaskteam.mainedit_grid.columns.left',
            show: true,
            util: 'PX',
            width: 100,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof MainEditGridBase
     */
    public getGridRowModel(){
        return {
          consumed: new FormItemModel(),
          root: new FormItemModel(),
          account: new FormItemModel(),
          left: new FormItemModel(),
          type: new FormItemModel(),
          estimate: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditGridBase
     */
    public rules() {
        return {
        consumed: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("consumed",this.deRules,"AND",value).isPast},message: "总计消耗大于等于0", trigger: 'blur' },
        ],
        root: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
        account: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用户 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("left",this.deRules,"AND",value).isPast},message: "预计剩余大于等于0", trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '团队类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '团队类型 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("estimate",this.deRules,"AND",value).isPast},message: "预计大于等于0", trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '编号 值不能为空', trigger: 'blur' },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEditBase
     */
    public deRules:any = {
                consumed:[
                  {
                      type:"VALUERANGE2",
                      condOP:"",
                      ruleInfo:"总计消耗大于等于0", 
                      isKeyCond:false,
                      isNotMode:false,
                      minValue:0,
                      deName:"consumed",
                      isIncludeMaxValue:false,
                      isIncludeMinValue:true,
                  },
                ],
                estimate:[
                  {
                      type:"SIMPLE",
                      condOP:"GT",
                      ruleInfo:"", 
                      isKeyCond:false,
                      paramValue:"0",
                      isNotMode:false,
                      deName:"estimate",
                  },
                ],
                left:[
                  {
                      type:"VALUERANGE2",
                      condOP:"",
                      ruleInfo:"预计剩余大于等于0", 
                      isKeyCond:false,
                      isNotMode:false,
                      minValue:0,
                      deName:"left",
                      isIncludeMaxValue:false,
                      isIncludeMinValue:true,
                  },
                ],
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainEditBase
     */
    public hasRowEdit: any = {
        'account':true,
        'estimate':true,
        'consumed':true,
        'left':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof MainEditBase
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
     * @memberof MainEditGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'account',
                srfkey: 'UserRealNameTask',
                codelistType : 'DYNAMIC',
                textSeparator: ',',
                renderMode: 'string',
                valueSeparator: ",",
            },
        ]);
    }

    /**
     * 添加数据
     * @param {*}  row 行数据
     * @memberof MainEdit
     */
    public add({ row, index }: { row: any, index: number }, func: Function) {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'CaseStepMainGridView9_EditMode视图表格loaddraftAction参数未配置' });
            return;
        }
        let _this = this;
        let param: any = {};
        Object.assign(param,{viewparams:this.viewparams});
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction, JSON.parse(JSON.stringify(this.context)), param, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }
            const data = response.data;
            this.createDefault(data);
            data.rowDataState = "create";
            if(row.type) {
                if(Object.is(row.type.toLowerCase(), 'group') || Object.is(row.type.toLowerCase(), 'item')) {
                    data.type = 'item';
                } else {
                    data.type = 'step';
                }
            }
            if(func instanceof Function) {
                func(data);
            }
            _this.gridItemsModel.push(_this.getGridRowModel());
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 保存
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [$event]
     * @param {*} [xData]
     * @returns
     * @memberof MainEdit
     */
    public async save(args: any[], params?: any, $event?: any, xData?: any) {
        if (!(await this.validateAll())) {
            if (this.errorMessages && this.errorMessages.length > 0) {
                this.$Notice.error({ title: this.$t('app.commonWords.wrong') as string, desc: this.errorMessages[0] });
            } else {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.commonWords.rulesException') as string,
                });
            }
            return [];
        }
        for (const item of this.items) {
            item.srfmajortext = item.account;
        }
        let successItems: any = [];
        for (const item of this.items) {
            let result: Promise<any>;
            const _appEntityService: any = this.appEntityService;
            let curAction:string = "";
            const _context: any = JSON.parse(JSON.stringify(this.context));
            let { data: Data,context: Context } = this.service.handleRequestData(this.createAction, _context, item, true);
            if (Object.is(item.rowDataState, 'create')) {
                Data.id = null;
                Data.root = null;
                curAction = this.createAction;
            }
            if(Object.is(item.rowDataState, 'update')){
                curAction = this.updateAction;
            }
            if(!curAction) continue;
            if (_appEntityService[curAction] && _appEntityService[curAction] instanceof Function) {
                result =  _appEntityService[curAction](Context,Data, this.showBusyIndicator);
            }else{
                result =  _appEntityService.Create(Context,Data, this.showBusyIndicator);
            }
            result.then((response) => {
                this.service.handleResponse(curAction, response);
                successItems.push(JSON.parse(JSON.stringify(response.data)));
            }) 
        }
        this.$emit('save', successItems);
    }
}