import { Prop } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { FormItemModel } from '@/model/form-detail';
import { MainControlBase } from './MainControlBase';
import { events } from '../global';
import { ViewTool } from '@/utils';
import schema from 'async-validator';
import { Environment } from '@/environments/environment';

/**
 * 表单部件基类
 *
 * @export
 * @class FormControlBase
 * @extends {MainControlBase}
 */
export class FormControlBase extends MainControlBase {
    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof FormControlBase
     */
    public formState: Subject<any> = new Subject();

    /**
     * 主键表单项名称
     *
     * @protected
     * @type {string}
     * @memberof FormControlBase
     */
    protected formKeyItemName: string = '';

    /**
     * 实体值规则
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public deRules: any = {};

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof FormControlBase
     */
    public ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @type {Subject<any>}
     * @memberof FormControlBase
     */
    public dataChang: Subject<any> = new Subject();

    /**
     * 原始数据
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public data: any = {};

    /**
     * 表单模型
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public detailsModel: any = {};

    /**
     * 自动加载
     *
     * @type {boolean}
     * @memberof FormControlBase
     */
    @Prop({ default: false })
    public isautoload?: boolean;

    /**
     * 自动保存
     *
     * @type {boolean}
     * @memberof FormControlBase
     */
    @Prop({ default: false })
    public autosave?: boolean;

    /**
     * 工作流审批意见控件绑定值
     *
     * @type {string}
     * @memberof FormControlBase
     */
    public srfwfmemo: string = '';

    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof FormControlBase
     */
    @Prop()
    public loaddraftAction!: string;

    /**
     * 当前执行的行为逻辑
     *
     * @type {string}
     * @memberof FormControlBase
     */
    public currentAction: string = '';

    /**
     * 关系界面计数器
     *
     * @type {number}
     * @memberof FormControlBase
     */
    public drcounter: number = 0;

    /**
     * 需要等待关系界面保存时，第一次调用save参数的备份
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public drsaveopt: any = {};

    /**
     * 表单保存回调存储对象
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public saveState: any;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public rules(): any {}

    /**
     * 界面服务
     *
     * @type {*}
     * @memberof FormControlBase
     */
    public appUIService: any;

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof FormControlBase
     */
    public onEnter($event: any): void {}

    /**
     * 值填充
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof FormControlBase
     */
    public fillForm(data: any = {}, action: string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(data).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = data[name];
            }
        });
        this.$nextTick(() => {
            this.ignorefieldvaluechange = false;
        });
    }

    /**
     * 设置表单项是否启用
     *
     * @param {*} data
     * @memberof FormControlBase
     */
    public setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @memberof FormControlBase
     */
    public resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof FormControlBase
     */
    public resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果（后台）
     *
     * @param {any[]} fieldErrors
     * @memberof FormControlBase
     */
    public fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 表单校验状态
     *
     * @returns {boolean}
     * @memberof FormControlBase
     */
    public formValidateStatus(): boolean {
        const form: any = this.$refs[this.name];
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        return validatestate;
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof FormControlBase
     */
    public getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof FormControlBase
     */
    public onFormItemValueChange($event: { name: string; value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof FormControlBase
     */
    public setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }

    /**
     * 置空对象
     *
     * @param {*} data
     * @memberof FormControlBase
     */
    public ResetData(data: any) {
        if (data) {
            data.clearAll();
        }
    }

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof FormControlBase
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项数据
     *
     * @returns {*}
     * @memberof FormControlBase
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 新建默认值
     *
     * @memberof FormControlBase
     */
    public createDefault(): void {}

    /**
     * 更新默认值
     *
     * @memberof FormControlBase
     */
    public updateDefault(): void {}

    /**
     * 部件创建完毕
     *
     * @memberof FormControlBase
     */
    public ctrlCreated(): void {
        if(this.isautoload){
            this.autoLoad({srfkey:this.context[this.appDeName]});
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe((params: any) => {
                const { tag, action, data } = params;
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    if (this.context.srfsourcekey) {
                        this.copy(this.context.srfsourcekey);
                    } else {
                        this.loadDraft(data);
                    }
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
    }

    /**
     * 表单项检查逻辑
     *
     * @public
     * @param name 属性名
     * @memberof FormControlBase
     */
    public async checkItem(name: string): Promise<any> {
        const validator = new schema({ [name]: this.rules()[name] });
        try {
            await validator.validate({ [name]: this.data[name] });
            return true;
        } catch (err) {
            console.error(err);
        }
        return false;
    }

    /**
     * 表单值变化
     *
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof FormControlBase
     */
    public formDataChange({ name, newVal, oldVal }: { name: string; newVal: any; oldVal: any }): void {}

    /**
     * 拷贝内容
     *
     * @param {string} srfkey
     * @memberof FormControlBase
     */
    public copy(srfkey: string): void {
        console.error('「表单部件-拷贝」暂未实现');
    }

    /**
     * 打印
     *
     * @memberof FormControlBase
     */
    public print() {
        console.error('「表单部件-打印」暂未实现');
    }

    /**
     * 表单加载完成
     *
     * @param {*} [data={}]
     * @param {string} action
     * @memberof FormControlBase
     */
    public onFormLoad(data: any = {}, action: string): void {}

    /**
     * 部件刷新
     *
     * @param {*} [args]
     * @returns {void}
     * @memberof FormControlBase
     */
    public refresh(args?: any): void {
        const arg: any = {};
        if (args && args.length > 0) {
            Object.assign(arg, args[0]);
        }
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }

    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public load(opt: any = {}): void {
        if (!this.loadAction) {
            this.$Notice.error({
                title: this.$t('app.commonWords.wrong') as string,
                desc: this.$t('app.formpage.notconfig.loadaction') as string,
            });
            return;
        }
        const arg: any = { ...opt };
        const viewparamResult: any = Object.assign(arg, this.viewparams);
        const get: Promise<any> = this.service.get(
            this.loadAction,
            JSON.parse(JSON.stringify(this.context)),
            { viewparams: viewparamResult },
            this.showBusyIndicator
        );
        get.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.onFormLoad(data, 'load');
                this.$emit(events.ctrl.LOAD, data);
                this.$nextTick(() => {
                    this.formState.next({ type: 'load', data: data });
                });
            }
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: this.$t('app.commonWords.wrong') as string, desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({
                    title: this.$t('app.commonWords.wrong') as string,
                    desc: this.$t('app.commonWords.sysException') as string,
                });
                return;
            }
        });
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @returns {void}
     * @memberof FormControlBase
     */
    public loadDraft(opt: any = {}): void {
        if (!this.loaddraftAction) {
            this.$Notice.error({ title: '错误', desc: `${this.name}表单loaddraftAction参数未配置` });
            return;
        }
        this.createDefault();
        const arg: any = { ...opt };
        let viewparamResult: any = Object.assign(arg, this.viewparams);
        let post: Promise<any> = this.service.loadDraft(
            this.loaddraftAction,
            JSON.parse(JSON.stringify(this.context)),
            { viewparams: viewparamResult },
            this.showBusyIndicator
        );
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.data) {
                    this.$Notice.error({ title: '错误', desc: response.data.message });
                }
                return;
            }

            const data = response.data;
            this.resetDraftFormStates();
            this.onFormLoad(data, 'loadDraft');
            if (this.formKeyItemName) {
                this.data[this.formKeyItemName] = null;
            }
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            setTimeout(() => {
                const form: any = this.$refs.form;
                if (form) {
                    form.fields.forEach((field: any) => {
                        field.validateMessage = '';
                        field.validateState = '';
                        field.validateStatus = false;
                    });
                }
            });
        }).catch((response: any) => {
            if (response && response.status && response.data) {
                this.$Notice.error({ title: '错误', desc: response.data.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 校验属性值规则
     *
     * @param {string} name
     * @param {*} [rule=this.deRules]
     * @param {string} [op="AND"]
     * @returns {{isPast:boolean,infoMessage:string}}
     * @memberof FormControlBase
     */
    public verifyDeRules(
        name: string,
        rule: any = this.deRules,
        op: string = 'AND'
    ): { isPast: boolean; infoMessage: string } {
        let falg: any = { infoMessage: '' };
        if (!rule[name]) {
            return falg;
        }
        let opValue = op == 'AND' ? true : false;
        let startOp = (val: boolean) => {
            if (falg.isPast) {
                if (opValue) {
                    falg.isPast = falg.isPast && val;
                } else {
                    falg.isPast = falg.isPast || val;
                }
            } else {
                falg.isPast = val;
            }
        };
        for (let i = 0; i < rule[name].length; i++) {
            let item: any = rule[name][i];
            let dataValue = item.deName ? this.data[this.service.getItemNameByDeName(item.deName)] : '';
            // 提供表单值规则默认提示信息(未配置值规则提示信息时)
            item.ruleInfo = item.ruleInfo ? item.ruleInfo : this.$t('app.formpage.valuecheckex');
            // 为空值时，属性值规则不做校验
            if ((dataValue === null || dataValue === undefined || dataValue === '') && item.type != 'GROUP') {
                startOp(true);
                return falg;
            }
            // 常规规则
            if (item.type == 'SIMPLE') {
                startOp(
                    !this.$verify.checkFieldSimpleRule(
                        dataValue,
                        item.condOP,
                        item.paramValue,
                        item.ruleInfo,
                        item.paramType,
                        this.data,
                        item.isKeyCond
                    )
                );
                falg.infoMessage = item.ruleInfo;
                if (!falg.isPast) return falg;
            }
            // 数值范围
            if (item.type == 'VALUERANGE2') {
                startOp(
                    !this.$verify.checkFieldValueRangeRule(
                        dataValue,
                        item.minValue,
                        item.isIncludeMinValue,
                        item.maxValue,
                        item.isIncludeMaxValue,
                        item.ruleInfo,
                        item.isKeyCond
                    )
                );
                falg.infoMessage = item.ruleInfo;
                if (!falg.isPast) return falg;
            }
            // 正则式
            if (item.type == 'REGEX') {
                startOp(!this.$verify.checkFieldRegExRule(dataValue, item.regExCode, item.ruleInfo, item.isKeyCond));
                falg.infoMessage = item.ruleInfo;
                if (!falg.isPast) return falg;
            }
            // 长度
            if (item.type == 'STRINGLENGTH') {
                startOp(
                    !this.$verify.checkFieldStringLengthRule(
                        dataValue,
                        item.minValue,
                        item.isIncludeMinValue,
                        item.maxValue,
                        item.isIncludeMaxValue,
                        item.ruleInfo,
                        item.isKeyCond
                    )
                );
                falg.infoMessage = item.ruleInfo;
                if (!falg.isPast) return falg;
            }
            // 系统值规则
            if (item.type == 'SYSVALUERULE') {
                startOp(
                    !this.$verify.checkFieldSysValueRule(
                        dataValue,
                        item.sysRule.regExCode,
                        item.ruleInfo,
                        item.isKeyCond
                    )
                );
                falg.infoMessage = item.ruleInfo;
                if (!falg.isPast) return falg;
            }
            // 分组
            if (item.type == 'GROUP') {
                falg = this.verifyDeRules('group', item, item.condOP ? item.condOP : 'AND');
                if (item.isNotMode) {
                    falg.isPast = !falg.isPast;
                }
                if (!falg.isPast) return falg;
            }
        }
        if (!falg.hasOwnProperty('isPast')) {
            falg.isPast = true;
        }
        if (!this.data[name]) {
            falg.isPast = true;
        }
        return falg;
    }

    /**
     * 计算表单按钮权限状态
     *
     * @param {*} [data] 传入数据
     * @memberof ${srfclassname('${ctrl.codeName}')}Base
     */
    public computeButtonState(data: any) {
        let targetData: any = this.transformData(data);
        if (this.detailsModel && Object.keys(this.detailsModel).length > 0) {
            Object.keys(this.detailsModel).forEach((name: any) => {
                if (
                    this.detailsModel[name] &&
                    this.detailsModel[name].uiaction &&
                    this.detailsModel[name].uiaction.dataaccaction &&
                    Object.is(this.detailsModel[name].detailType, 'BUTTON')
                ) {
                    this.detailsModel[name].isPower = true;
                    let tempUIAction: any = JSON.parse(JSON.stringify(this.detailsModel[name].uiaction));
                    let result: any[] = ViewTool.calcActionItemAuthState(targetData, [tempUIAction], this.appUIService);
                    this.detailsModel[name].visible = tempUIAction.visible;
                    this.detailsModel[name].disabled = tempUIAction.disabled;
                    this.detailsModel[name].isPower = result[0] === 1 ? true : false;
                }
            });
        }
    }
}
