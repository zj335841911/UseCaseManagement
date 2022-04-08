import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, ListControlBase } from '@/studio-core';
import IbizproIndexService from '@/service/ibizpro-index/ibizpro-index-service';
import IndexMobService from './index-mob-list-service';
import IbizproIndexUIService from '@/uiservice/ibizpro-index/ibizpro-index-ui-service';
import CodeListService from '@service/app/codelist-service';

/**
 * list部件基类
 *
 * @export
 * @class ListControlBase
 * @extends {IndexMobListBase}
 */
export class IndexMobListBase extends ListControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected controlType: string = 'LIST';

    /**
     * 建构部件服务对象
     *
     * @type {IndexMobService}
     * @memberof IndexMobListBase
     */
    public service: IndexMobService = new IndexMobService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {IbizproIndexService}
     * @memberof IndexMobListBase
     */
    public appEntityService: IbizproIndexService = new IbizproIndexService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeName: string = 'ibizproindex';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof IndexMobListBase
     */
    protected appDeLogicName: string = '索引检索';

    /**
     * 界面UI服务对象
     *
     * @type {IbizproIndexUIService}
     * @memberof IndexMobBase
     */  
    public appUIService: IbizproIndexUIService = new IbizproIndexUIService(this.$store);

    /**
     * 代码表服务对象
     *
     * @type {CodeListService}
     * @memberof IndexMobListBase
     */
    public codeListService: CodeListService = new CodeListService({ $store: this.$store });

    /**
     * 排序方向
     *
     * @type {string}
     * @memberof IndexMobListBase
     */
    public minorSortDir: string = '';


    /**
     * 多表单属性
     * 
     * @type {*}
     * @memberof IndexMobListBase 
     */
    public multiFormDEField: any = {
        field: 'indextype',
        codelist: {
            type: 'STATIC',
            tag: 'IndexType'
        }
    };

	/**
     * 部件挂载完毕
     *
     * @protected
     * @memberof IndexMobListBase
     */
    protected ctrlMounted(): void {
        this.initViewMap();
    }

    /**
     * 所有重定向视图
     * 
     * @memberof  IndexMobListBase
     */ 
    public allRedirectViewMap: Map<string, Object> = new Map();

    /**
     * 初始化重定向视图Map
     * 
     * @memberof  IndexMobListBase
     */  
    public initViewMap(){
        this.allRedirectViewMap.set('EDITVIEW:DOC', {
            viewname: 'dashboardview',
            srfappde: 'doc',
            component: 'doc-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodule: 'zentao',
            title: '文档',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'docs', parameterName: 'doc' },
                { pathName: 'dashboardview', parameterName: 'dashboardview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:TASK', {
            viewname: 'maindashboardview',
            srfappde: 'task',
            component: 'task-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodule: 'zentao',
            title: '任务',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'tasks', parameterName: 'task' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:PRODUCT', {
            viewname: 'maintabexpview',
            srfappde: 'product',
            component: 'product-main-tab-exp-view',
            openmode: '',
            viewmodule: 'zentao',
            title: '产品',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'products', parameterName: 'product' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:PROJECT', {
            viewname: 'maintabexpview',
            srfappde: 'project',
            component: 'project-main-tab-exp-view',
            openmode: '',
            viewmodule: 'zentao',
            title: '项目',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'projects', parameterName: 'project' },
                { pathName: 'maintabexpview', parameterName: 'maintabexpview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:CASE', {
            viewname: 'maindashboardview',
            srfappde: 'case',
            component: 'case-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodule: 'zentao',
            title: '功能测试',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'cases', parameterName: 'case' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:STORY', {
            viewname: 'mainview',
            srfappde: 'story',
            component: 'story-main-view',
            openmode: 'DRAWER_TOP',
            viewmodule: 'zentao',
            title: '需求',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'stories', parameterName: 'story' },
                { pathName: 'mainview', parameterName: 'mainview' },
            ]
        })
        this.allRedirectViewMap.set('EDITVIEW:BUG', {
            viewname: 'maindashboardview',
            srfappde: 'bug',
            component: 'bug-main-dashboard-view',
            openmode: 'DRAWER_TOP',
            viewmodule: 'zentao',
            title: 'Bug',
            width: 1400,
            height: 850,
            parameters:[
                { pathName: 'bugs', parameterName: 'bug' },
                { pathName: 'maindashboardview', parameterName: 'maindashboardview' },
            ]
        })
    }

    /**
     * 双击事件
     * 
     * @param item 当前数据
     * @memberof IndexMobListBase
     */
    public async handleDblClick(item: any){
        const multiFormDEField = this.multiFormDEField;
        if (multiFormDEField.field) {
            let curData = this.$util.deepCopy(item);
            if (multiFormDEField.codelist) {
                let codelist: any = await this.codeListService.getDataItems(multiFormDEField.codelist);
                if(codelist && codelist.length > 0){
                    const arr:Array<any> = codelist.filter((field:any)=>{return field.label == curData[multiFormDEField.field]});
                    if (arr && arr.length > 0) {
                        curData[multiFormDEField.field] = arr[0].value.toUpperCase();
                    }
                }
            }
            this.openRedirectView(curData);
        } else {
            console.error(this.$t('app.fullTextSearch.multiFormDEField'));
        }
    }

    /**
     * 打开重定向视图
     *
     * @param {*} curData 当前数据
     * @memberof IndexMobListBase
     */
    public openRedirectView(curData: any) {
        let tempContext = JSON.parse(JSON.stringify(this.context));
        this.appUIService.getService('ibizproindex').then((service) => {
            if(!service) {
                this.$Notice.error({desc: ''+this.$t('app.fullTextSearch.redirectService')})
                return;
            }
            const srfkey: any = curData.ibizproindex;
            service.getDESDDEViewPDTParam(curData,false,false).then((res:any) => {
                if (res) {
					const redirectView: any =  this.allRedirectViewMap.get(res);
					if (redirectView) {
						Object.assign(tempContext,{ [redirectView.srfappde]: srfkey});
						this.$openViewService.openView(redirectView, tempContext, { ...this.viewparams, srfkey });
					} else {
						console.error(this.$t('app.fullTextSearch.findRedirectView'));
					}
                } else {
                    console.error(this.$t('app.fullTextSearch.redirectConfiguration'));
                }
            })
        })
    }

    /**
     * 页面变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof IndexMobListBase
     */
    public pageOnChange($event: any): void {
        if (!$event || $event === this.curPage) {
            return;
        }
        this.curPage = $event;
        this.load({});
    }

    /**
     * 分页条数变化
     *
     * @param {*} $event
     * @returns {void}
     * @memberof IndexMobListBase
     */
    public onPageSizeChange($event: any): void {
        if (!$event || $event === this.limit) {
            return;
        }
        this.limit = $event;
        if (this.curPage === 1) {
            this.load({});
        }
    }

    /**
     * 分页刷新
     *
     * @memberof IndexMobListBase
     */
    public pageRefresh(): void {
        this.load({});
    }

}