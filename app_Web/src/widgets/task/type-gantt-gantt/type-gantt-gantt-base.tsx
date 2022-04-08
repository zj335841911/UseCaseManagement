import { Prop, Provide, Emit, Model } from 'vue-property-decorator';
import { Subject, Subscription } from 'rxjs';
import { UIActionTool, Util, ViewTool } from '@/utils';
import { Watch, MainControlBase } from '@/studio-core';
import TaskService from '@/service/task/task-service';
import TypeGanttService from './type-gantt-gantt-service';
import TaskUIService from '@/uiservice/task/task-ui-service';

/**
 * gantt部件基类
 *
 * @export
 * @class MainControlBase
 * @extends {TypeGanttGanttBase}
 */
export class TypeGanttGanttBase extends MainControlBase {
    /**
     * 获取部件类型
     *
     * @protected
     * @type {string}
     * @memberof TypeGanttGanttBase
     */
    protected controlType: string = 'GANTT';

    /**
     * 建构部件服务对象
     *
     * @type {TypeGanttService}
     * @memberof TypeGanttGanttBase
     */
    public service: TypeGanttService = new TypeGanttService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof TypeGanttGanttBase
     */
    public appEntityService: TaskService = new TaskService({ $store: this.$store });

    /**
     * 应用实体名称
     *
     * @protected
     * @type {string}
     * @memberof TypeGanttGanttBase
     */
    protected appDeName: string = 'task';

    /**
     * 应用实体中文名称
     *
     * @protected
     * @type {string}
     * @memberof TypeGanttGanttBase
     */
    protected appDeLogicName: string = '任务';

    /**
     * 界面UI服务对象
     *
     * @type {TaskUIService}
     * @memberof TypeGanttBase
     */  
    public appUIService: TaskUIService = new TaskUIService(this.$store);

    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskTaskTypeGanttView
     */
    public childtasks_opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.projectmodule && true){
            deResParameters = [
            { pathName: 'projectmodules', parameterName: 'projectmodule' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'task-main-dashboard-view', 
            height: 850, 
            width: 1400,  
            title: this.$t('entities.task.views.maindashboardview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }


    /**
     * 打开编辑数据视图
     *
     * @param {any[]} args
     * @param {*} [params]
     * @param {*} [fullargs]
     * @param {*} [$event]
     * @param {*} [xData]
     * @memberof TaskTaskTypeGanttView
     */
    public tasks_opendata(args: any[],fullargs?:any[],params?: any, $event?: any, xData?: any) {
        const localContext: any = null;
        const localViewParam: any =null;
        const data: any = {};
        let tempContext = JSON.parse(JSON.stringify(this.context));
        if(args.length >0){
            Object.assign(tempContext,args[0]);
        }
        let deResParameters: any[] = [];
        if(tempContext.projectmodule && true){
            deResParameters = [
            { pathName: 'projectmodules', parameterName: 'projectmodule' },
            ]
        }
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
        ];
        const _this: any = this;
        const openDrawer = (view: any, data: any) => {
            let container: Subject<any> = this.$appdrawer.openDrawer(view, tempContext, data);
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
                if (!xData || !(xData.refresh instanceof Function)) {
                    return;
                }
                xData.refresh(result.datas);
            });
        }
        const view: any = {
            viewname: 'task-main-dashboard-view', 
            height: 850, 
            width: 1400,  
            title: this.$t('entities.task.views.maindashboardview.title'),
            placement: 'DRAWER_TOP',
        };
        openDrawer(view, data);
    }



    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof TypeGantt
     */
    @Prop({ default: true }) public showBusyIndicator?: boolean;

    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof TypeGantt
     */
    @Prop() public loadAction!: string;

    /**
     * 部件样式名
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public ganttClass: string = "gantt";

     /**
     * 语言
     *
     * @public
     * @type {string}
     * @memberof TypeGantt
     */  
    public locale: string = 'zh-CN';

     /**
     * 语言资源
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */   
    public localeZH: any =  {
        weekdays: ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        Now: "现在",
        "X-Scale": "时间颗粒度",
        "Display task list": "显示列表",
        "Before/After": "数据范围"
    }

    /**
     * 配置参数
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public options: any = {
        isflex: true,
        maxRows: 1000,
        dataType: 'treegrid',
        title: {
            label: ""
        },
        header: {
            yScole: false,
            taskListWidth: false,
        },
        calendar: {
            hour: {
                display: false
            }
        },
        chart: {
            progress: {
                bar: false
            },
            expander: {
                display: true
            },
        },
        taskList: {
            expander: {
                straight: false
            },
            labelField: 'text',
            columns: [
                {
                    label: '任务类型分类',
                    value: 'text',
                    render: (task: any) => {
                        return this.getColumnValue(task, 'text')
                    },
                    expander: true,
                    width: 160,
                },
                {
                    label: '指派给',
                    value: 'assignedto',
                    render: (task: any) => {
                        return this.getColumnValue(task, 'assignedto')
                    },
                    width: 100,
                },
                {
                    label: '开始时间',
                    value: 'start',
                    render: (task: any) => {
                        return this.getColumnValue(task, 'start')
                    },
                    width: 100,
                },
                {
                    label: '结束时间',
                    value: 'end',
                    render: (task: any) => {
                        return this.getColumnValue(task, 'end')
                    },
                    width: 100,
                },
                {
                    label: '持续时间',
                    value: 'taskduration',
                    render: (task: any) => {
                        return this.getColumnValue(task, 'taskduration')
                    },
                    width: 100,
                },
            ]
        }
    };

    /**
     * 样式
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public dynamicStyle: any = {};

    /**
     * 日程事件集合
     *
     * @public
     * @type {any[]}
     * @memberof TypeGantt
     */
    public tasks: any[] = [];

    /**
     * 监听语言变化
     *
     * @public
     * @memberof TypeGantt
     */
    @Watch('$i18n.locale')
    public onLocaleChange(newval: any, val: any) {
        this.locale = newval;
    }

    /**
     * 获取列属性值
     *
     * @public
     * @memberof TypeGantt
     */
    public getColumnValue(task: any, field: string) {
        if(Object.is(task.id.split(';')[0], 'TaskTypes')) {
            if (Object.is(field, 'text')) {
                let codelist: any[] = this.$store.getters.getCodeList('Task__type');
                if(codelist) {
                    return this.getCodeListItem(codelist, task[field]);
                }
            }
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'ROOT')) {
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'ChildTasks')) {
            return task[field];
        }
        if(Object.is(task.id.split(';')[0], 'Tasks')) {
            return task[field];
        }
    }

    /**
     * 获取代码项
     *
     * @public
     * @memberof TypeGantt
     */
    public getCodeListItem(codelist: any, val: any) {
        for(let i = 0; i < codelist.items.length; i++) {
            if(Object.is(codelist.items[i].value, val)) {
                return codelist.items[i].text;
            }
        }
        return codelist.emptytext;
    }

    /**
     * 获取部件参数
     *
     * @returns {any}
     * @memberof TypeGantt
     */
    public getOptions() {
        if(Object.is(this.locale, 'zh-CN')) {
            return { locale: this.localeZH, ...this.options };
        }
        return this.options;
    }

    /**
     * 搜索获取日程事件
     *
     * @param {*} $event 日期信息
     * @memberof TypeGantt
     */
    public load(task: any = {}) {
        const params: any = {
            srfnodeid: task && task.id ? task.id : "#",
            srfnodefilter: ''
        };
        let tempViewParams:any = JSON.parse(JSON.stringify(this.viewparams));
        let curNode:any = {}; 
        this.$util.deepObjectMerge(curNode, task);
        let tempContext:any = this.computecurNodeContext(curNode);
        if(curNode && curNode.srfparentdename) {
            Object.assign(tempContext,{ srfparentdename: curNode.srfparentdename });
            Object.assign(tempViewParams,{ srfparentdename: curNode.srfparentdename });
        }
        if(curNode && curNode.srfparentkey) {
            Object.assign(tempContext,{ srfparentkey: curNode.srfparentkey });
            Object.assign(tempViewParams,{ srfparentkey: curNode.srfparentkey });
        }
        Object.assign(params,{viewparams:tempViewParams});
        this.service.getNodes(tempContext,params).then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
                return;
            }
            this.tasks = [...this.tasks, ...response.data];
            response.data.forEach((item: any) => {
                if(!item.collapsed) {
                    this.load(item);
                }
            })
            this.$emit("load", this.tasks);
        }).catch((response: any) => {
            if (response && response.status === 401) {
                return;
            }
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: response.info });
        });
    }

    /**
     * 计算当前节点的上下文
     *
     * @param {*} curNode 当前节点
     * @memberof TypeGantt
     */
    public computecurNodeContext(curNode:any){
        let tempContext:any = {};
        if(curNode && curNode.data && curNode.data.srfappctx){
            tempContext = JSON.parse(JSON.stringify(curNode.data.srfappctx));
        }else{
            tempContext = JSON.parse(JSON.stringify(this.context));
        }
        return tempContext;
    }

    /**
     * 节点展开
     *
     * @param {*} task 当前节点
     * @memberof TypeGantt
     */
    public taskItemExpand(task: any) {
        if(!task.collapsed) {
            let index: number = this.tasks.findIndex((item: any) => Object.is(task.id, item.parentId));
            if(index < 0) {
                this.load(task);
            }
        }
    }

    /**
     * 刷新
     *
     * @memberof TypeGantt
     */
    public refresh() {
        this.load();
    }



    /**
     * 选中的数据
     *
     * @returns {any[]}
     * @memberof TypeGantt
     */
    public selections: any[] = [];

    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof TypeGantt
     */
    public getDatas(): any[] {
        return this.selections;
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof TypeGantt
     */
    public getData(): any {
        return null;
    }
             
    /**
     * vue 生命周期
     *
     * @returns
     * @memberof TypeGantt
     */
    public created() {
        this.locale = this.$i18n.locale;
        this.load();
    }

    /**
     * 点击事件
     *
     * @returns
     * @memberof TypeGantt
     */
    public taskClick({event, data}: {event: any, data: any}) {
        const _this: any = this;
        let key: string = data.id.split(';')[0].toLowerCase();
        if(_this[key + '_opendata'] instanceof Function) {
            _this[key + '_opendata']([data]);
        }
    }

}