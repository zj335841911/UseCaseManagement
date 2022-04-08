import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool,Util,ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProductService from '@/service/product/product-service';
import ProductWizardService from './product-wizard-wizardpanel-service';
import ProductUIService from '@/uiservice/product/product-ui-service';


/**
 * wizardpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {ProductWizardWizardPanelBase}
 */
export class ProductWizardWizardPanelBase extends MainControlBase {

    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardWizardPanelBase
     */
    protected controlType: string = 'WIZARDPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {ProductWizardService}
     * @memberof ProductWizardWizardPanelBase
     */
    public service: ProductWizardService = new ProductWizardService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductService}
     * @memberof ProductWizardWizardPanelBase
     */
    public appEntityService: ProductService = new ProductService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardWizardPanelBase
     */
    protected appDeName: string = 'product';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof ProductWizardWizardPanelBase
     */
    protected appDeLogicName: string = '产品';

    /**
     * 界面UI服务对象
     *
     * @type {ProductUIService}
     * @memberof ProductWizardBase
     */  
    public appUIService:ProductUIService = new ProductUIService(this.$store);

    /**
     * wizardpanel_form_AddStory 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_AddStory_save($event: any, $event2?: any) {
        this.wizardpanel_formsave($event, 'wizardpanel_form_AddStory', $event2);
    }

    /**
     * wizardpanel_form_AddStory 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_AddStory_load($event: any, $event2?: any) {
        this.wizardpanel_formload($event, 'wizardpanel_form_AddStory', $event2);
    }

    /**
     * wizardpanel_form_AddProduct 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_AddProduct_save($event: any, $event2?: any) {
        this.wizardpanel_formsave($event, 'wizardpanel_form_AddProduct', $event2);
    }

    /**
     * wizardpanel_form_AddProduct 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_AddProduct_load($event: any, $event2?: any) {
        this.wizardpanel_formload($event, 'wizardpanel_form_AddProduct', $event2);
    }

    /**
     * wizardpanel_form_Product 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_Product_save($event: any, $event2?: any) {
        this.wizardpanel_formsave($event, 'wizardpanel_form_Product', $event2);
    }

    /**
     * wizardpanel_form_Product 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_Product_load($event: any, $event2?: any) {
        this.wizardpanel_formload($event, 'wizardpanel_form_Product', $event2);
    }

    /**
     * wizardpanel_form_CreateStory 部件 save 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_CreateStory_save($event: any, $event2?: any) {
        this.wizardpanel_formsave($event, 'wizardpanel_form_CreateStory', $event2);
    }

    /**
     * wizardpanel_form_CreateStory 部件 load 事件
     *
     * @param {*} [args={}]
     * @param {*} $event
     * @memberof ProductWizardWizardPanelBase
     */
    public wizardpanel_form_CreateStory_load($event: any, $event2?: any) {
        this.wizardpanel_formload($event, 'wizardpanel_form_CreateStory', $event2);
    }


    /**
     * 部件行为--init
     *
     * @type {string}
     * @memberof ProductWizardBase
     */
    @Prop() public initAction!: string;
    
    /**
     * 部件行为--finish
     *
     * @type {string}
     * @memberof ProductWizardBase
     */
    @Prop() public finishAction!: string;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof ProductWizardBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 状态属性
     *
     * @type {string}
     * @memberof ProductWizardBase
     */
    public stateField: string = '';

    /**
     * 步骤标识集合
     *
     * @type {*}
     * @memberof ProductWizardBase
     */
    public stepTags: any = {};

    /**
      * 获取多项数据
      *
      * @returns {any[]}
      * @memberof ProductWizardBase
      */
    public getDatas(): any[] {
        return [this.formParam];
    }

    /**
      * 获取单项数据
      *
      * @returns {*}
      * @memberof ProductWizardBase
      */
    public getData(): any {
        return this.formParam;
    }

    /**
     * 视图状态订阅对象
     *
     * @public
     * @type {Subject<{action: string, data: any}>}
     * @memberof ProductWizardBase
     */
    public wizardState: Subject<ViewState> = new Subject();

    /**
     * 当前激活表单
     *
     * @type {string}
     * @memberof ProductWizardBase
     */
    public activeForm: string = 'wizardpanel_form_Product';

    /**
     * 向导表单参数
     *
     * @type {*}
     * @memberof ProductWizardBase
     */
    public formParam: any = {};

    /**
     * 执行过的表单
     *
     * @public
     * @type {Array<string>}
     * @memberof ProductWizardBase
     */
    public historyForms: Array<string> = [];

    /**
     * 步骤行为集合
     *
     * @type {*}
     * @memberof ProductWizardBase
     */
    public stepActions: any = {};

    /**
     * 向导表单集合
     *
     * @type {Array<any>}
     * @memberof ProductWizardBase
     */
    public wizardForms: Array<any> = [];

    /**
     * 当前状态
     *
     * @memberof ProductWizardBase
     */
    public curState = '';

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof ProductWizardBase
     */
    public created(): void {
        this.regFormActions();
        if(this.activeForm && !this.stateField) {
            this.historyForms.push(this.activeForm);
        }
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (Object.is(tag, this.name)) {
                    if (Object.is('load', action)) {
                        this.doInit(data);
                    }
                }
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ProductWizardBase
     */
    public destroyed() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 注册表单步骤行为
     *
     * @memberof ProductWizardBase
     */
    public regFormActions() {
        this.regFormAction('wizardpanel_form_Product',{loadAction:"WizardCreate",saveAction:'WizardCreate',actions:['NEXT']},'Product');
        this.regFormAction('wizardpanel_form_AddProduct',{loadAction:"WizardCreate",saveAction:'WizardCreate',actions:['PREV','NEXT']},'AddProduct');
        this.regFormAction('wizardpanel_form_CreateStory',{loadAction:"WizardCreate",saveAction:'WizardCreate',actions:['PREV','NEXT','FINISH']},'CreateStory');
        this.regFormAction('wizardpanel_form_AddStory',{loadAction:"WizardCreate",saveAction:'WizardCreate',actions:['PREV','FINISH']},'AddStory');
    }

    /**
     * 注册表单步骤行为
     *
     * @memberof ProductWizardBase
     */
    public regFormAction(name: string, actionParams: any,stepTag:any) {
        this.stepActions[name] = actionParams;
        this.stepTags[name] = stepTag;
        this.wizardForms.push(name);
    }

    /**
     * 初始化行为
     *
     * @memberof ProductWizardBase
     */
    public doInit(opt: any = {}) {
        const arg: any = { ...opt };
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.init(this.initAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (response && response.status === 200) {
                this.formParam = response.data;
                if(response.data.product){
                    Object.assign(this.context,{product:response.data.product})
                }
                this.formLoad(this.formParam);
            }
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.data.message });
        });
    }

    /**
     * 表单加载
     *
     * @memberof ProductWizardBase
     */
    public formLoad(data:any) {
        if(this.stateField) this.computedActiveForm(data);
        if(this.activeForm) {
            this.wizardState.next({ tag: this.activeForm, action:'panelaction',data: {action:this.stepActions[this.activeForm].loadAction,emitAction:'load',data:this.formParam} });
        }
    }

    /**
     * 根据状态获取当前激活表单
     *
     * @memberof ProductWizardBase
     */
    public computedActiveForm(data:any){
        if(data && data[this.stateField]){
            if(Object.keys(this.stepTags).length >0){
                Object.keys(this.stepTags).forEach((name:string) =>{
                    if(this.stepTags[name] === data[this.stateField]){
                        this.activeForm = name;
                        return;
                    }
                })
            }
        }
    }

    /**
     * 完成行为
     *
     * @memberof ProductWizardBase
     */
    public doFinish() {
        let arg: any = {};
        Object.assign(arg, this.formParam);
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.finish(this.finishAction, JSON.parse(JSON.stringify(this.context)), arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.$Notice.success({ title: this.$t('app.commonWords.success') as string, desc: this.$t('app.commonWords.startsuccess') as string });
                this.$emit("finish", data);
            }
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.data.message });
        });
    }

    /**
     * 向导表单加载完成
     *
     * @param {*} args
     * @param {string} name
     * @memberof ProductWizardBase
     */
    public wizardpanel_formload(args: any, name: string, $event2?: any) {
        if(args) {
            Object.assign(this.formParam, args);
        }
    }

    /**
     * 向导表单保存完成
     *
     * @param {*} args
     * @param {string} name
     * @memberof ProductWizardBase
     */
    public wizardpanel_formsave(args: any, name: string, $event2?: any) {
        Object.assign(this.formParam, args);
        if(Object.is(this.curState, 'NEXT')) {
            this.historyForms.push(name);
            if(!this.stateField){
                if (this.getNextForm()) {
                    this.activeForm = this.getNextForm();
                    setTimeout(() => {
                        this.formLoad(this.formParam);
                    }, 1);
                } else {
                    this.doFinish();
                }
            }else{
                setTimeout(() => {
                    this.formLoad(this.formParam);
                }, 1);
            }
        }else if(Object.is(this.curState, 'PREV')) {
            if(this.stateField){
                setTimeout(() => {
                    this.formLoad(this.formParam);
                }, 1);
            }
        }else if(Object.is(this.curState, 'FINISH')) {
            this.doFinish();
        }
    }

    /**
     * 获取下一步向导表单
     *
     * @memberof ProductWizardBase
     */
    public getNextForm() {
        let index = this.wizardForms.indexOf(this.activeForm);
        if(index >= 0) {
            if(this.wizardForms[index + 1]) {
                return this.wizardForms[index + 1];
            }
        }
        return undefined;
    }


    /**
     * 上一步
     *
     * @memberof ProductWizardBase
     */
    public onClickPrev() {
        if(!this.stateField){
            const length = this.historyForms.length;
            if(length > 1) {
                this.curState = 'PREV';
                this.activeForm = this.historyForms[length - 1];
                setTimeout(() => {
                    this.formLoad(this.formParam);
                }, 1);
                this.historyForms.splice(length - 1, 1);
            }
        }else{
            if(this.activeForm) {
                if(this.$refs && this.$refs[this.activeForm]){
                    let form: any = this.$refs[this.activeForm];
                    this.curState = 'PREV';
                    if(!this.stepActions[this.activeForm].preAction){
                        this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc:this.$t('app.wizardPanel.preactionmessage') as string  });
                        return;
                    }
                    this.wizardState.next({ tag: this.activeForm, action:'panelaction',data: {action:this.stepActions[this.activeForm].preAction,emitAction:'save',data:this.formParam} });
                   
                }
            }
        }
    }

    /**
     * 下一步
     *
     * @memberof ProductWizardBase
     */
    public onClickNext() {
        if(this.activeForm) {
            if(this.$refs && this.$refs[this.activeForm]){
                let form: any = this.$refs[this.activeForm];
                if(form.formValidateStatus()) {
                    this.curState = 'NEXT';
                    this.wizardState.next({ tag: this.activeForm, action:'panelaction',data: {action:this.stepActions[this.activeForm].saveAction,emitAction:'save',data:this.formParam} });
                } else {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.rulesException') as string) });
                }
            }
        }
    }

    /**
     * 完成
     *
     * @memberof ProductWizardBase
     */
    public onClickFinish() {
        if(this.activeForm) {
            if(this.$refs && this.$refs[this.activeForm]){
                let form: any = this.$refs[this.activeForm];
                if(form.formValidateStatus()) {
                    this.curState = 'FINISH';
                    this.wizardState.next({ tag: this.activeForm, action:'panelaction',data: {action:this.stepActions[this.activeForm].saveAction,emitAction:'save',data:this.formParam} });
                } else {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.rulesException') as string) });
                }
            }
        }
    }

    /**
     * 是否禁用
     *
     * @param {string} type
     * @memberof ProductWizardBase
     */
    public isDisabled(type: string) {
        const actions: Array<string> = this.stepActions[this.activeForm].actions;
        if(actions && actions.indexOf(type) < 0) {
            return true;
        }
        return false;
    }
    

}