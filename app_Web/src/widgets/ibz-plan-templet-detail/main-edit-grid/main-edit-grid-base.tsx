import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, GridControlBase } from '@/studio-core';
import IbzPlanTempletDetailService from '@/service/ibz-plan-templet-detail/ibz-plan-templet-detail-service';
import Main_EditService from './main-edit-grid-service';
import IbzPlanTempletDetailUIService from '@/uiservice/ibz-plan-templet-detail/ibz-plan-templet-detail-ui-service';
import { FormItemModel } from '@/model/form-detail';

/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {Main_EditGridBase}
 */
export class Main_EditGridBase extends GridControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof Main_EditGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {Main_EditService}
     * @memberof Main_EditGridBase
     */
    public service: Main_EditService = new Main_EditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbzPlanTempletDetailService}
     * @memberof Main_EditGridBase
     */
    public appEntityService: IbzPlanTempletDetailService = new IbzPlanTempletDetailService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof Main_EditGridBase
     */
    protected appDeName: string = 'ibzplantempletdetail';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof Main_EditGridBase
     */
    protected appDeLogicName: string = '计划模板详情嵌套';

    /**
     * 界面UI服务对象
     *
     * @type {IbzPlanTempletDetailUIService}
     * @memberof Main_EditBase
     */  
    public appUIService: IbzPlanTempletDetailUIService = new IbzPlanTempletDetailUIService(this.$store);

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof GridControlBase
     */
    protected localStorageTag: string = 'ibzplantempletdetail_main_edit_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof Main_EditGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof Main_EditGridBase
     */
    public limit: number = 50;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof Main_EditGridBase
     */
    public allColumns: any[] = [
        {
            name: 'desc',
            property: 'desc',
            label: '计划名称',
            langtag: 'entities.ibzplantempletdetail.main_edit_grid.columns.desc',
            show: true,
            util: 'PX',
            width: 200,
        },
        {
            name: 'type',
            property: 'type',
            label: '类型',
            langtag: 'entities.ibzplantempletdetail.main_edit_grid.columns.type',
            show: true,
            util: 'PX',
            width: 100,
            codelistId: 'PlantempletType'
        },
        {
            name: 'expect',
            property: 'expect',
            label: '描述',
            langtag: 'entities.ibzplantempletdetail.main_edit_grid.columns.expect',
            show: true,
            util: 'STAR',
            width: 200,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof Main_EditGridBase
     */
    public getGridRowModel(){
        return {
          expect: new FormItemModel(),
          desc: new FormItemModel(),
          type: new FormItemModel(),
          srfkey: new FormItemModel(),
          plancode: new FormItemModel(),
          plantempletid: new FormItemModel(),
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_EditGridBase
     */
    public rules() {
        return {
        expect: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '描述 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '描述 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划名称 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划名称 值不能为空', trigger: 'blur' },
        ],
        type: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '类型 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划模板详情标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划模板详情标识 值不能为空', trigger: 'blur' },
        ],
        plancode: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '计划编号 值不能为空', trigger: 'blur' },
        ],
        plantempletid: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '产品计划模板标识 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '产品计划模板标识 值不能为空', trigger: 'blur' },
        ],
        }
    }

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main_EditBase
     */
    public deRules:any = {
    };

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof Main_EditBase
     */
    public hasRowEdit: any = {
        'desc':true,
        'type':true,
        'expect':true,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof Main_EditBase
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
     * @memberof Main_EditGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'type',
                srfkey: 'PlantempletType',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }

    /**
     * 添加数据
     * @param {*}  row 行数据
     * @memberof Main_Edit
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
     * @memberof Main_Edit
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
            item.srfmajortext = item.ibzplantempletdetailname;
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
                Data.plantempletid = null;
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