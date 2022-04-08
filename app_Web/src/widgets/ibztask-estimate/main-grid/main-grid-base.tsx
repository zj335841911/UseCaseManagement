import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import IBZTaskEstimateService from '@/service/ibztask-estimate/ibztask-estimate-service';
import MainService from './main-grid-service';
import IBZTaskEstimateUIService from '@/uiservice/ibztask-estimate/ibztask-estimate-ui-service';
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
     * @type {IBZTaskEstimateService}
     * @memberof MainGridBase
     */
    public appEntityService: IBZTaskEstimateService = new IBZTaskEstimateService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeName: string = 'ibztaskestimate';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainGridBase
     */
    protected appDeLogicName: string = '任务预计';

    /**
     * 界面UI服务对象
     *
     * @type {IBZTaskEstimateUIService}
     * @memberof MainBase
     */  
    public appUIService: IBZTaskEstimateUIService = new IBZTaskEstimateUIService(this.$store);

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'ibz_taskestimate_main_grid';

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof MainGridBase
     */
    public allColumns: any[] = [
        {
            name: 'dates',
            property: 'dates',
            label: '日期',
            langtag: 'entities.ibztaskestimate.main_grid.columns.dates',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'consumed',
            property: 'consumed',
            label: '总计消耗',
            langtag: 'entities.ibztaskestimate.main_grid.columns.consumed',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'left',
            property: 'left',
            label: '预计剩余',
            langtag: 'entities.ibztaskestimate.main_grid.columns.left',
            show: true,
            util: 'PX',
            width: 100,
        },
        {
            name: 'work',
            property: 'work',
            label: '备注',
            langtag: 'entities.ibztaskestimate.main_grid.columns.work',
            show: true,
            util: 'PX',
            width: 100,
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
          id: new FormItemModel(),
          work: new FormItemModel(),
          consumed: new FormItemModel(),
          dates: new FormItemModel(),
          left: new FormItemModel(),
          srfkey: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainGridBase
     */
    public rules() {
        return {
        id: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: 'ID 值不能为空', trigger: 'blur' },
        ],
        work: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '备注 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '备注 值不能为空', trigger: 'blur' },
        ],
        consumed: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '总计消耗 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("consumed",this.deRules,"AND",value).isPast},message: "总计消耗大于等于0", trigger: 'blur' },
        ],
        dates: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '日期 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '日期 值不能为空', trigger: 'blur' },
        ],
        left: [
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'change' },
            { required: true, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '预计剩余 值不能为空', trigger: 'blur' },
            {validator:(rule:any, value:any, callback:any)=>{return this.verifyDeRules("left",this.deRules,"AND",value).isPast},message: "预计剩余大于等于0", trigger: 'blur' },
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
     * @memberof MainBase
     */
    public deRules:any = {
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
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof MainBase
     */
    public hasRowEdit: any = {
        'dates':true,
        'consumed':true,
        'left':true,
        'work':true,
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
        ]);
    }

    /**
     * 添加数据
     * @param {*}  row 行数据
     * @memberof Main
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
     * @memberof Main
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
            item.srfmajortext = item.id;
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
                Data.task = null;
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