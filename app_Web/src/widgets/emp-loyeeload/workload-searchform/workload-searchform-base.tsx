import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, SearchFormControlBase } from '@/studio-core';
import EmpLoyeeloadService from '@/service/emp-loyeeload/emp-loyeeload-service';
import WorkloadService from './workload-searchform-service';
import EmpLoyeeloadUIService from '@/uiservice/emp-loyeeload/emp-loyeeload-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

/**
 * searchform部件基类
 *
 * @export
 * @class SearchFormControlBase
 * @extends {WorkloadSearchFormBase}
 */
export class WorkloadSearchFormBase extends SearchFormControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof WorkloadSearchFormBase
     */
    protected controlType: string = 'SEARCHFORM';

    /**
     * 建构部件服务对象
     *
     * @type {WorkloadService}
     * @memberof WorkloadSearchFormBase
     */
    public service: WorkloadService = new WorkloadService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {EmpLoyeeloadService}
     * @memberof WorkloadSearchFormBase
     */
    public appEntityService: EmpLoyeeloadService = new EmpLoyeeloadService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof WorkloadSearchFormBase
     */
    protected appDeName: string = 'employeeload';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof WorkloadSearchFormBase
     */
    protected appDeLogicName: string = '员工负载表';

    /**
     * 界面UI服务对象
     *
     * @type {EmpLoyeeloadUIService}
     * @memberof WorkloadBase
     */  
    public appUIService: EmpLoyeeloadUIService = new EmpLoyeeloadUIService(this.$store);


    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof WorkloadSearchFormBase
     */
    public data: any = {
        dept: null,
        begin: null,
        end: null,
        workday: null,
        everydaytime: null,
        assign: null,
    };

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof WorkloadSearchFormBase
     */
    public detailsModel: any = {
        formpage1: new FormPageModel({ caption: '表单分页', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        dept: new FormItemModel({ caption: '部门', detailType: 'FORMITEM', name: 'dept', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        begin: new FormItemModel({ caption: '起止时间', detailType: 'FORMITEM', name: 'begin', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        end: new FormItemModel({ caption: '至', detailType: 'FORMITEM', name: 'end', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        workday: new FormItemModel({ caption: '工作天数', detailType: 'FORMITEM', name: 'workday', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        everydaytime: new FormItemModel({ caption: '每天工时', detailType: 'FORMITEM', name: 'everydaytime', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assign: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'assign', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 表单逻辑
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Workload
     */
    public async formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): Promise<void> {
                







        if (Object.is(name, 'begin')) {
            const details: string[] = ['workday'];
            this.updateFormItems('UpdateTime', this.data, details, true);
        }
        if (Object.is(name, 'end')) {
            const details: string[] = ['workday'];
            this.updateFormItems('UpdateTime', this.data, details, true);
        }
    }

    /**
     * 新建默认值
     * @memberof WorkloadBase
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('begin')) {
          this.data['begin'] = this.$util.dateFormat(new Date());
        }
        if (this.data.hasOwnProperty('workday')) {
          this.data['workday'] = 6;
        }
        if (this.data.hasOwnProperty('everydaytime')) {
          this.data['everydaytime'] = '7';
        }
    }
}