import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import ProductLifeService from '@/service/product-life/product-life-service';
import GetRoadmapYearSService from './get-roadmap-year-s-list-service';
import ProductLifeUIService from '@/uiservice/product-life/product-life-ui-service';
import GetRoadmapSService from '@/widgets/product-life/get-roadmap-s-list/get-roadmap-s-list-service';

/**
 * list部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {GetRoadmapYearSListBase}
 */
export class GetRoadmapYearSListBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapYearSListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapYearSService}
     * @memberof GetRoadmapYearSListBase
     */
    public service: GetRoadmapYearSService = new GetRoadmapYearSService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductLifeService}
     * @memberof GetRoadmapYearSListBase
     */
    public appEntityService: ProductLifeService = new ProductLifeService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapYearSListBase
     */
    protected appDeName: string = 'productlife';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof GetRoadmapYearSListBase
     */
    protected appDeLogicName: string = '产品生命周期';

    /**
     * 界面UI服务对象
     *
     * @type {ProductLifeUIService}
     * @memberof GetRoadmapYearSBase
     */  
    public appUIService: ProductLifeUIService = new ProductLifeUIService(this.$store);


    /**
     * 建构部件服务对象
     *
     * @type {GetRoadmapSService}
     * @memberof GetRoadmapYearS
     */
    public service2: GetRoadmapSService = new GetRoadmapSService({ $store: this.$store });

    /**
     * 列表展示模式
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */
    @Prop({ default: 'default' })
    protected mode!: string;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */    
    public sortDir2:string = 'desc';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */    
    public sortField2: string = 'begin';


    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof GetRoadmapYearS
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof GetRoadmapYearS
     */
    public getData(): any {
        return null;
    }

    /**
     * 是否默认选中第一条数据
     *
     * @type {boolean}
     * @memberof GetRoadmapYearS
     */
    @Prop({ default: false }) public isSelectFirstDefault!: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof GetRoadmapYearS
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */
    @Prop() public createAction!: string;

    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */
    @Prop() public removeAction!: string;

    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */
    @Prop() public updateAction!: string;

    /**
     * 部件行为--fetch
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */
    @Prop() public fetchAction!: string;

    /**
     * 当前页
     *
     * @type {number}
     * @memberof Main
     */
    public curPage: number = 1;

    /**
     * 数据
     *
     * @type {any[]}
     * @memberof GetRoadmapYearS
     */
    public items: any[] = [];

    /**
     * 是否支持分页
     *
     * @type {boolean}
     * @memberof GetRoadmapYearS
     */
    public isEnablePagingBar: boolean = true;

    /**
     * 分页条数
     *
     * @type {number}
     * @memberof GetRoadmapYearS
     */
    public limit: number = 1000;

    /**
     * 总条数
     *
     * @type {number}
     * @memberof GetRoadmapYearS
     */
    public totalRecord: number = 0;

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */    
    public sortDir:string = 'desc';

    /**
     * 排序字段
     *
     * @type {string}
     * @memberof GetRoadmapYearS
     */    
    public sortField: string = 'year';

    /**
     * 选中数组
     * @type {Array<any>}
     * @memberof GetRoadmapYearS
     */
    public selections: Array<any> = [];

     /**
     * Vue声明周期，组件挂载完毕
     *
     * @memberof GetRoadmapYearS
     */
    public mounted () {
        this.afterMounted();
    }

    /**
     * 执行mounted后的逻辑
     *
     * @memberof GetRoadmapYearS
     */
    public afterMounted () {
        this.$el.addEventListener('scroll', ()=> {
            if( this.$el.scrollTop +  this.$el.clientHeight  >=  this.$el.scrollHeight) {
                this.loadMore();
            }
        })
    }

    /**
     * Vue声明周期，组件创建完毕
     *
     * @memberof GetRoadmapYearS
     */
    public created() {
        this.afterCreated()
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof GetRoadmapYearS
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(this.name, tag)) {
                    return;
                }
                if (Object.is(action,'load')) {
                    this.refresh(data)
                }
            });
        }
    }    

    /**
     * vue 生命周期
     *
     * @memberof GetRoadmapYearS
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof GetRoadmapYearS
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }    

    /**
    * 加载更多
    *
    * @memberof Mob
    */
    public loadMore(){
        if(this.totalRecord>this.items.length)
        {
            this.curPage = ++this.curPage;
            this.load({});
        }
    }

    /**
     * 刷新
     *
     * @param {*} [opt={}]
     * @memberof Main
     */
    public refresh(opt: any = {}) {
        this.curPage = 1;
        this.items = [];
        this.load(opt);
    }

    /**
     * 根据年份加载子数据
     *
     * @public
     * @param {*} [arg={}]
     * @renturn Promise<any>
     * @memberof GetRoadmapYearS
     */
    public async load2(opt: any = {}): Promise<any> {
        const arg: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(arg, { page: this.curPage - 1, size: this.limit });
        }
        // 设置排序
        if (!Object.is(this.sortDir2, '') && !Object.is(this.sortField2, '')) {
          const sort: string = this.sortField2+","+this.sortDir2;
            Object.assign(arg, { sort: sort });
        }
        arg.viewparams = this.viewparams || {};
        arg.viewparams.year = opt.year;
        const context = { ...(this.context || {}) };
        try {
            const res = await this.service2.search('FetchGetRoadmapS', context, arg, this.showBusyIndicator);
            if (res && res.status === 200) {
                opt.items = res.data;
            }
        } catch (error) { }
    }

    /**
     * 列表数据加载
     *
     * @public
     * @param {*} [arg={}]
     * @memberof GetRoadmapYearS
     */
    public load(opt: any = {}): void {
        if(!this.fetchAction){
            this.$Notice.error({ title: '错误', desc: 'ProductLifeRoadMapSListView9视图列表fetchAction参数未配置' });
            return;
        }        
        const arg: any = {...opt};
        const page: any = {};
        if (this.isEnablePagingBar) {
            Object.assign(page, { page: this.curPage-1, size: this.limit });
        }
        // 设置排序
        if (!Object.is(this.sortDir, '') && !Object.is(this.sortField, '')) {
          const sort: string = this.sortField+","+this.sortDir;
            Object.assign(page, { sort: sort });
        }
        Object.assign(arg, page);
        const parentdata: any = {};
        this.$emit('beforeload', parentdata);
        Object.assign(arg, parentdata);
        let tempViewParams:any = parentdata.viewparams?parentdata.viewparams:{};
        Object.assign(tempViewParams,JSON.parse(JSON.stringify(this.viewparams)));
        Object.assign(arg,{viewparams:tempViewParams});
        const post: Promise<any> = this.service.search(this.fetchAction, this.context?JSON.parse(JSON.stringify(this.context)):{}, arg, this.showBusyIndicator);
        post.then(async (response: any) => {
            if (!response || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }
            const items: any = response.data;
            this.items = [];
            if (items&& items.length > 0) {
                for (let index = 0; index < items.length; index++) {
                    const item = items[index];
                    Object.assign(item, { isselected: false });
                    await this.load2(item);
                }
                this.totalRecord = response.total;
                this.items.push(...items);
            }
            this.$emit('load', this.items);
            if(this.isSelectFirstDefault){
                this.handleClick(this.items[0]);
            }
        }, (response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: '错误', desc: response.errorMessage });
        });
    }

    /**
     * 删除
     *
     * @param {any[]} datas
     * @returns {Promise<any>}
     * @memberof GetRoadmapYearS
     */
    public async remove(datas: any[]): Promise<any> {
        if(!this.removeAction){
            this.$Notice.error({ title: '错误', desc: 'ProductLifeRoadMapSListView9视图表格removeAction参数未配置' });
            return;
        }
        if (datas.length === 0) {
            return;
        }
        let dataInfo = '';
        datas.forEach((record: any, index: number) => {
            let srfmajortext = record.srfmajortext;
            if (index < 5) {
                if (!Object.is(dataInfo, '')) {
                    dataInfo += '、';
                }
                dataInfo += srfmajortext;
            } else {
                return false;
            }
        });

        if (datas.length < 5) {
            dataInfo = dataInfo + ' 共' + datas.length + '条数据';
        } else {
            dataInfo = dataInfo + '...' + ' 共' + datas.length + '条数据';
        }

        const removeData = () => {
            let keys: any[] = [];
            datas.forEach((data: any) => {
                keys.push(data.srfkey);
            });
            let _removeAction = keys.length > 1 ? 'removeBatch' : this.removeAction ;
            const context:any = JSON.parse(JSON.stringify(this.context));
            const post: Promise<any> = this.service.delete(_removeAction,Object.assign(context,{ productlife: keys.join(';') }),Object.assign({ productlife: keys.join(';') },{viewparams:this.viewparams}), this.showBusyIndicator);
            return new Promise((resolve: any, reject: any) => {
                post.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '删除数据失败,' + response.info });
                        return;
                    } else {
                        this.$Notice.success({ title: '', desc: '删除成功!' });
                    }
                    //删除items中已删除的项
                    datas.forEach((data: any) => {
                      this.items.some((item:any,index:number)=>{
                        if(Object.is(item.srfkey,data.srfkey)){
                          this.items.splice(index,1);
                                return true;
                            }
                        });
                    });
                    this.$emit('remove', null);
                    this.selections = [];
                    resolve(response);
                }).catch((response: any) => {
                    if (response && response.status === 401) {
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
                });
            });
        }

        dataInfo = dataInfo.replace(/[null]/g, '').replace(/[undefined]/g, '').replace(/[ ]/g, '');
        this.$Modal.confirm({
            title: '警告',
            content: '确认要删除 ' + dataInfo + '，删除操作将不可恢复？',
            onOk: () => {
                removeData();
            },
            onCancel: () => { }
        });
        return removeData;
    }

    /**
     * 选择数据
     * @memberof GetRoadmapYearS
     *
     */
    public handleClick(args: any) {
        this.clearSelection();
        args.isselected = !args.isselected;
        this.selectchange();
    }

    /**
     * 双击数据
     * @memberof GetRoadmapYearS
     *
     */
    public handleDblClick(args: any) {
        this.$emit('rowdblclick', args);
    }

    /**
     * 触发事件
     * @memberof GetRoadmapYearS
     *
     */
    public selectchange() {
        this.selections = [];
        this.items.map((item: any) => {
            if (item.isselected) {
                this.selections.push(item);
            }
        });
        this.$emit('selectionchange', this.selections);
    }

    /**
     * 清除当前所有选中状态
     *
     * @memberof GetRoadmapYearS
     */
    public clearSelection(){
        this.items.map((item: any) => {
            Object.assign(item, { isselected: false });
        }); 
    }

}