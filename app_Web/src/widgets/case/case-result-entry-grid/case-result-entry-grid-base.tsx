import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { Watch, GridControlBase } from '@/studio-core';
import CaseService from '@/service/case/case-service';
import CaseResultEntryService from './case-result-entry-grid-service';
import CaseUIService from '@/uiservice/case/case-ui-service';
import { FormItemModel } from '@/model/form-detail';


/**
 * grid部件基类
 *
 * @export
 * @class GridControlBase
 * @extends {CaseResultEntryGridBase}
 */
export class CaseResultEntryGridBase extends GridControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof CaseResultEntryGridBase
     */
    protected controlType: string = 'GRID';

    /**
     * 建构部件服务对象
     *
     * @type {CaseResultEntryService}
     * @memberof CaseResultEntryGridBase
     */
    public service: CaseResultEntryService = new CaseResultEntryService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {CaseService}
     * @memberof CaseResultEntryGridBase
     */
    public appEntityService: CaseService = new CaseService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof CaseResultEntryGridBase
     */
    protected appDeName: string = 'case';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof CaseResultEntryGridBase
     */
    protected appDeLogicName: string = '测试用例';

    /**
     * 界面UI服务对象
     *
     * @type {CaseUIService}
     * @memberof CaseResultEntryBase
     */  
    public appUIService:CaseUIService = new CaseUIService(this.$store);

    /**
     * 界面行为模型
     *
     * @type {*}
     * @memberof CaseResultEntryBase
     */  
    public ActionModel: any = {
    };

    /**
     * 本地缓存标识
     *
     * @protected
     * @type {string}
     * @memberof CaseResultEntryBase
     */
    protected localStorageTag: string = 'zt_case_caseresultentry_grid';

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof CaseResultEntryGridBase
     */
    public isEnablePagingBar: boolean = false;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof CaseResultEntryGridBase
     */
    public minorSortDir: string = 'DESC';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof CaseResultEntryGridBase
     */
    public minorSortPSDEF: string = 'resultcnt';

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof CaseResultEntryGridBase
     */
    public limit: number = 40;

    /**
     * 所有列成员
     *
     * @type {any[]}
     * @memberof CaseResultEntryGridBase
     */
    public allColumns: any[] = [
        {
            name: 'lastrunresult1',
            label: '条目',
            langtag: 'entities.case.caseresultentry_grid.columns.lastrunresult1',
            show: true,
            unit: 'STAR',
            isEnableRowEdit: false,
        },
        {
            name: 'resultcnt',
            label: '值',
            langtag: 'entities.case.caseresultentry_grid.columns.resultcnt',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
        {
            name: 'task',
            label: '百分比',
            langtag: 'entities.case.caseresultentry_grid.columns.task',
            show: true,
            unit: 'PX',
            isEnableRowEdit: false,
        },
    ]

    /**
     * 获取表格行模型
     *
     * @type {*}
     * @memberof CaseResultEntryGridBase
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
     * @memberof CaseResultEntryGridBase
     */
    public rules: any = {
        srfkey: [
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'change' },
            { required: false, validator: (rule:any, value:any, callback:any) => { return (rule.required && (value === null || value === undefined || value === "")) ? false : true;}, message: '用例编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 获取对应列class
     *
     * @type {*}
     * @memberof CaseResultEntryBase
     */
    public hasRowEdit: any = {
        'lastrunresult1':false,
        'resultcnt':false,
        'task':false,
    };

    /**
     * 获取对应列class
     *
     * @param {*} $args row 行数据，column 列数据，rowIndex 行索引，列索引
     * @returns {void}
     * @memberof CaseResultEntryBase
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
     * @memberof CaseResultEntryGridBase
     */
    public async formatExcelData(filterVal: any, jsonData: any, codelistColumns?: any[]): Promise<any> {
        return super.formatExcelData(filterVal, jsonData, [
            {
                name: 'lastrunresult1',
                srfkey: 'Testcase__result',
                codelistType : 'STATIC',
                renderMode: 'other',
                textSeparator: '、',
                valueSeparator: ',',
            },
        ]);
    }



}