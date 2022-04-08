import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TestResultService from '@/service/test-result/test-result-service';
import MainService from './main-multieditviewpanel-service';
import TestResultUIService from '@/uiservice/test-result/test-result-ui-service';

/**
 * meditviewpanel部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {MainMultieditviewpanelBase}
 */
export class MainMultieditviewpanelBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof MainMultieditviewpanelBase
     */
    protected controlType: string = 'MULTIEDITVIEWPANEL';

    /**
     * 建构部件服务对象
     *
     * @type {MainService}
     * @memberof MainMultieditviewpanelBase
     */
    public service: MainService = new MainService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TestResultService}
     * @memberof MainMultieditviewpanelBase
     */
    public appEntityService: TestResultService = new TestResultService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof MainMultieditviewpanelBase
     */
    protected appDeName: string = 'testresult';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof MainMultieditviewpanelBase
     */
    protected appDeLogicName: string = '测试结果';

    /**
     * 界面UI服务对象
     *
     * @type {TestResultUIService}
     * @memberof MainBase
     */  
    public appUIService: TestResultUIService = new TestResultUIService(this.$store);

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainBase
     */
    public getDatas(): any[] {
        return [];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainBase
     */
    public getData(): any {
        return null;
    }

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MainBase
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public updateAction!: string;
    
    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public fetchAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public removeAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public loadAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public loaddraftAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MainBase
     */
    @Prop() public createAction!: string;

    /**
     * 刷新数据
     *
     * @type {number}
     * @memberof MainBase
     */
    @Prop() public saveRefView?: number;

    /**
     * 刷新数据
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainBase
     */
    @Watch('saveRefView')
    onSaveRefView(newVal: any, oldVal: any) {
        console.log('保存多项数据!');
        if (newVal > 0) {
            this.$emit('drdatasaved', false);
        }

    }
    
    /**
     * 对象转字符串
     *
     * @type {*}
     * @memberof MainBase
     */
    public toString(item:any): string{
        return JSON.stringify(item);
    }

     /**
     * 面板状态订阅对象
     *
     * @public
     * @type {Subject<{action: string, data: any}>}
     * @memberof Meditviewpanel
     */
    public panelState: Subject<ViewState> = new Subject();

    /**
     * 视图名称
     *
     * @type {string}
     * @memberof MainBase
     */
    public viewname: string = 'test-result-edit-view9';

    /**
     * 获取数据对象
     *
     * @type {any[]}
     * @memberof MainBase
     */
    public items: any[] = [];

    /**
     * 计数器
     *
     * @type number
     * @memberof MainBase
     */
    public count: number = 0;


    /**
     * 关系实体参数对象
     *
     * @public
     * @type {any[]}
     * @memberof MainBase
     */
    public deResParameters: any[] = [
        { pathName: 'cases', parameterName: 'case' },
    ];

    /**
     * 当前应用视图参数对象
     *
     * @public
     * @type {any[]}
     * @memberof MainBase
     */
    public parameters: any[] = [
        { pathName: 'testresults', parameterName: 'testresult' },
    ];

    /**
     * vue 声明周期
     *
     * @memberof MainBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is(action, 'load')) {
                    this.load(data);
                }
                if (Object.is(action, 'save')) {
                    this.saveData(data);
                }
            });
        }
    }   

    /**
     * vue 生命周期
     *
     * @memberof MainBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

     /**
      * 保存数据
      *
      * @memberof Meditviewpanel
      */
    public saveData(data?: any) {
        this.count = 0;
        if(this.items.length >0){
            Object.assign(data,{showResultInfo:false});
            this.panelState.next({ tag: 'meditviewpanel', action: 'save', data: data });
        }else{
            this.$emit("drdatasaved",{action:'drdatasaved'});
        }
    }

    /**
     * 处理数据
     *
     * @public
     * @param {any[]} datas
     * @memberof MainBase
     */
    public doItems(datas: any[]): void {
        const [{ pathName, parameterName }] = this.parameters;
        datas.forEach((arg: any) => {
            let id: string = arg[parameterName] ? arg[parameterName] : this.$util.createUUID();

            let item: any = { id: id, viewdata: {}, viewparam: {} };
            Object.assign(item.viewdata, this.$viewTool.getIndexViewParam());
            Object.assign(item.viewdata, this.context);

            // 关系应用实体参数
            this.deResParameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
                if (this.context[parameterName] && !Object.is(this.context[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: this.context[parameterName] });
                } else if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: arg[parameterName] });
                }
            });

            // 当前视图参数（应用实体视图）
            this.parameters.forEach(({ pathName, parameterName }: { pathName: string, parameterName: string }) => {
                if (arg[parameterName] && !Object.is(arg[parameterName], '')) {
                    Object.assign(item.viewdata, { [parameterName]: arg[parameterName] });
                }
            });

            //合并视图参数
            Object.assign(item.viewparam, this.viewparams);
            this.items.push(item);
        });
    }

    /**
     * 数据加载
     *
     * @public
     * @param {*} data
     * @memberof MainBase
     */
    public load(data: any): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: 'TestResultMEditView9' + (this.$t('app.multiEditView.notConfig.fetchAction') as string) });
            return;
        }
        let arg: any = {};
        Object.assign(arg, data,{viewparams:this.viewparams});
        this.items = [];
        const promice: Promise<any> = this.service.get(this.fetchAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        promice.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
                }
                return;
            }
            const data: any = response.data;
           if (data.length > 0) {
                const items = JSON.parse(JSON.stringify(data));
                this.doItems(items);
            }
            this.$emit('load', this.items);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
        });
    }

    /**
     * 增加数据
     * 
     * @memberof MainBase
     */
    public handleAdd(){
        if(!this.loaddraftAction){
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: 'TestResultMEditView9' + (this.$t('app.multiEditView.notConfig.loaddraftAction') as string) });
            return;
        }
        const promice: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:this.viewparams}, this.showBusyIndicator);
        promice.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
                }
                return;
            }
            const data: any = response.data;
            this.doItems([data]);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.errorMessage });
        });
    }

    /**
     * 设置视图脏值变化
     *
     * @param {*} item
     * @param {boolean} $event
     * @memberof MainBase
     */
    public setViewDirty(item: any, $event: boolean) {
        let index: number = this.items.findIndex((_item: any) => Object.is(_item.id, item.id));
        if (index === -1) {
            return;
        }
        Object.assign(this.items[index], { viewdirty: $event });
        let state: boolean = this.items.some((item: any) => {
            if (item.viewdirty) {
                return true;
            }
            return false;
        });
        this.$emit('viewdatadirty', state);
    }

     /**
     * 部件抛出事件
     * @memberof MainBase
     */
    public viewDataChange($event:any){
        if($event){
            try{
                $event = JSON.parse($event);
            }catch(error){
                return;
            }
            if(Object.is($event.action,'load')){
                console.log('加载----');
            }
            if(Object.is($event.action,'save')){
                this.count++;
                if (this.items.length === this.count) {
                    this.$emit('drdatasaved',{action:'save'});
                }
            }
            if(Object.is($event.action,'remove')){
                if ($event.data) {
                    let resultIndex = this.items.findIndex((value:any, index:any, arr:any) => {
                        return value['viewdata']['orderdetailtestid'] === $event.data['orderdetailtestid'];
                    });
                    if (resultIndex !== -1) {
                        this.items.splice(resultIndex, 1);
                    }
                }
            }            
        }
    }

    /**
     * 视图加载完成
     *
     * @returns
     * @memberof MainBase
     */
    public viewload($event:any){
        console.log('视图加载完成');
    }

    /**
     * editview9 视图数据变化
     *
     * @returns
     * @memberof MainBase
     */
    public viewdirty(item:any,$event:any){
        // editview9 视图数据变化;
        this.setViewDirty(item, $event);
    }

}