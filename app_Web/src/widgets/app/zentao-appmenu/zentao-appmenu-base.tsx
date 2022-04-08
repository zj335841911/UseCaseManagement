import { Prop, Provide, Vue, Model, Watch } from 'vue-property-decorator';
import ZentaoModel from './zentao-appmenu-model';
import AuthService from '@/authservice/auth-service';
import { Subject, Subscription } from 'rxjs';

/**
 * 应用菜单基类
 */
export class ZentaoBase extends Vue {
    // 补充参数避免html报错
    counterdata: any = null;

    /**
     * 获取应用上下文
     *
     * @memberof ZentaoBase
     */
    get context(): any {
        return this.$appService.contextStore.appContext || {};
    }

    /**
     * 名称
     *
     * @type {string}
     * @memberof ZentaoBase
     */
    @Prop() public name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof ZentaoBase
     */
    @Prop() public viewState!: Subject<ViewState>;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof ZentaoBase
     */
    @Prop() public viewparams!: any;

    /**
     * 菜单收缩改变
     *
     * @type {boolean}
     * @memberof ZentaoBase
     */
    @Model() public collapsechange?: boolean;

    /**
     * 监听菜单收缩
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof ZentaoBase
     */
    @Watch('collapsechange')
    onCollapsechangeChange(newVal: any, oldVal: any) {
        if (newVal !== this.isCollapse) {
            this.isCollapse = !this.isCollapse;
        }
    }

    /**
     * 当前模式，菜单在顶部还是在底部
     *
     * @type {*}
     * @memberof ZentaoBase
     */
    @Prop() mode: any;

    /**
     * 应用起始页面
     *
     * @type {boolean}
     * @memberof ZentaoBase
     */
    @Prop({ default: false }) isDefaultPage?: boolean;

    /**
     * 空白视图模式
     *
     * @type {boolean}
     * @memberof ZentaoBase
     */
    @Prop({ default: false }) isBlankMode?:boolean;

    /**
     * 默认打开视图
     *
     * @type {*}
     * @memberof ZentaoBase
     */
    @Prop() defPSAppView: any;

    /**
     * 默认激活的index
     *
     * @type {*}
     * @memberof ZentaoBase
     */
    @Provide() defaultActive: any = null;

    /**
     * 当前选中主题
     *
     * @type {*}
     * @memberof ZentaoBase
     */
    @Prop() selectTheme: any;

    /**
     * 默认打开的index数组
     *
     * @type {any[]}
     * @memberof ZentaoBase
     */
    @Provide() public defaultOpeneds: any[] = [];

    /**
     * 是否展开
     *
     * @type {boolean}
     * @memberof ZentaoBase
     */
    @Provide() public isCollapse: boolean = false;

    /**
     * 触发方式，默认click
     *
     * @type {string}
     * @memberof ZentaoBase
     */
    @Provide() trigger: string = 'click';

    /**
     * 视图状态事件
     *
     * @public
     * @type {(Subscription | undefined)}
     * @memberof ZentaoBase
     */
    public viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof ZentaoBase
     */
    public getControlType(): string {
        return 'APPMENU'
    }

    /**
     * 菜单模型
     *
     * @public
     * @type {ZentaoModel}
     * @memberof ZentaoBase
     */
    public menuMode: ZentaoModel = new ZentaoModel();

    /**
     * 菜单数据
     *
     * @public
     * @type {any[]}
     * @memberof ZentaoBase
     */
    @Provide()
    public menus: any[] = [];
    
    /**
     * 主菜单数据
     *
     * @public
     * @type {any[]}
     * @memberof ProductNewBase
     */
    @Provide()
    public mainMenus: any[] = [];

    /**
     * 建构权限服务对象
     *
     * @type {AuthService}
     * @memberof ZentaoBase
     */
    public authService:AuthService = new AuthService({ $store: this.$store });

    /**
     * vue  生命周期
     *
     * @memberof ZentaoBase
     */
    public created() {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof ZentaoBase
     */    
    public afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                this.load(data);
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof ZentaoBase
     */
    public destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof ZentaoBase
     */
    public afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
    }

    /**
     * 处理菜单默认选中项
     *
     * @public
     * @memberof ZentaoBase
     */
    public doMenuSelect(): void {
        if (!this.isDefaultPage || this.isBlankMode) {
            return;
        }
        const appFuncs: any[] = this.menuMode.getAppFuncs();
        if (this.$route && this.$route.matched && this.$route.matched.length == 2) { // 存在二级路由
            const [{ }, matched] = this.$route.matched;
            const appfunc: any = appFuncs.find((_appfunc: any) => Object.is(_appfunc.routepath, matched.path) && Object.is(_appfunc.appfunctype, 'APPVIEW'));
            if (appfunc) {
                this.computeMenuSelect(this.menus, appfunc.appfunctag);
            }
            return;
        } else if (this.defPSAppView && Object.keys(this.defPSAppView).length > 0) { // 存在默认视图
            const appfunc: any = appFuncs.find((_appfunc: any) => Object.is(_appfunc.routepath, this.defPSAppView.routepath) && Object.is(_appfunc.appfunctype, 'APPVIEW'));
            if (appfunc) {
                this.computeMenuSelect(this.menus, appfunc.appfunctag);
            }
            const viewparam: any = {};
            const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, this.defPSAppView.deResParameters, this.defPSAppView.parameters, [], viewparam);
            this.$router.push(path);
            return;
        }

        this.computeMenuSelect(this.menus, '');
        let item = this.compute(this.menus, this.defaultActive);
        if (Object.keys(item).length === 0) {
            return;
        }
        if(!item.hidden){
            this.click(item);
        }
    }

    /**
     * 计算菜单选中项
     *
     * @public
     * @param {any[]} items
     * @param {string} appfunctag
     * @returns {boolean}
     * @memberof ZentaoBase
     */
    public computeMenuSelect(items: any[], appfunctag: string): boolean {
        const appFuncs: any[] = this.menuMode.getAppFuncs();
        return items.some((item: any) => {
            if (Object.is(appfunctag, '') && !Object.is(item.appfunctag, '') && item.opendefault) {
                const appfunc = appFuncs.find((_appfunc: any) => Object.is(_appfunc.appfunctag, item.appfunctag));
                if (appfunc.routepath) {
                    this.defaultActive = item.name;
                    this.setHideSideBar(item);
                    return true;
                }
            }
            if (Object.is(item.appfunctag, appfunctag) && item.opendefault) {
                this.setHideSideBar(item);
                this.defaultActive = item.name;
                return true;
            }
            if (item.items && item.items.length > 0) {
                const state = this.computeMenuSelect(item.items, appfunctag);
                if (state) {
                    this.defaultOpeneds.push(item.name);
                    return true;
                }
            }
            return false;
        });
    }

    /**
     * 设置是否隐藏菜单栏
     *
     * @public
     * @param {*} item
     * @memberof ZentaoBase
     */
    public setHideSideBar(item: any): void {
        if (item.hidesidebar) {
            this.$emit('collapsechange', true);
        }
    }

    /**
     * 获取菜单项数据
     *
     * @public
     * @param {any[]} items
     * @param {string} name
     * @returns
     * @memberof ZentaoBase
     */
    public compute(items: any[], name: string) {
        const item: any = {};
        items.some((_item: any) => {
            if (name && Object.is(_item.name, name)) {
                Object.assign(item, _item);
                return true;
            }
            if (_item.items && Array.isArray(_item.items)) {
                const subItem = this.compute(_item.items, name);
                if (Object.keys(subItem).length > 0) {
                    Object.assign(item, subItem);
                    return true;
                }
            }
            return false;
        });
        return item;
    }

    /**
     * 菜单项选中处理
     *
     * @param {*} index
     * @param {any[]} indexs
     * @returns
     * @memberof ZentaoBase
     */
    public select(index: any, indexs: any[]) {
        let item = this.compute(this.menus, index);
        if (Object.keys(item).length === 0) {
            return;
        }
        this.click(item);
    }

    /**
     * 菜单点击
     *
     * @param {*} item 菜单数据
     * @memberof ZentaoBase
     */
    public click(item: any) {
        if (item) {
            let judge = true;
            switch (item.appfunctag) {
                case 'AppFunc4': 
                    this.clickAppFunc4(item); break;
                case 'Auto32': 
                    this.clickAuto32(item); break;
                case 'Auto2': 
                    this.clickAuto2(item); break;
                case 'Auto10': 
                    this.clickAuto10(item); break;
                case 'Auto27': 
                    this.clickAuto27(item); break;
                case 'AppFunc7': 
                    this.clickAppFunc7(item); break;
                case 'AppFunc5': 
                    this.clickAppFunc5(item); break;
                case 'AppFunc8': 
                    this.clickAppFunc8(item); break;
                case 'Auto15': 
                    this.clickAuto15(item); break;
                case 'POAppFunc': 
                    this.clickPOAppFunc(item); break;
                case 'Auto6': 
                    this.clickAuto6(item); break;
                case 'Auto23': 
                    this.clickAuto23(item); break;
                case 'Auto1': 
                    this.clickAuto1(item); break;
                case 'Auto9': 
                    this.clickAuto9(item); break;
                case 'AppFunc9': 
                    this.clickAppFunc9(item); break;
                case 'Auto5': 
                    this.clickAuto5(item); break;
                case 'AppFunc3': 
                    this.clickAppFunc3(item); break;
                case 'PluginManagement': 
                    this.clickPluginManagement(item); break;
                case 'AppFunc2': 
                    this.clickAppFunc2(item); break;
                case 'Auto29': 
                    this.clickAuto29(item); break;
                case 'Auto8': 
                    this.clickAuto8(item); break;
                case 'Auto26': 
                    this.clickAuto26(item); break;
                case 'Auto11': 
                    this.clickAuto11(item); break;
                case 'AppFunc6': 
                    this.clickAppFunc6(item); break;
                case 'AppFunc': 
                    this.clickAppFunc(item); break;
                default:
                    judge = false;
                    console.warn('未指定应用功能');
            }
            if (judge && this.$uiState.isStyle2()) {
                this.$appService.navHistory.reset();
                this.$appService.viewStore.reset();
            }
        }
    }
    
    /**
     * 文档
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc4(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'doclibs', parameterName: 'doclib' },
            { pathName: 'libtabexpview', parameterName: 'libtabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * story主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto32(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'stories', parameterName: 'story' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 左边栏产品列表视图
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto2(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 我的地盘
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto10(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'tabexpview', parameterName: 'tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * task主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto27(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'tasks', parameterName: 'task' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 计划模板
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc7(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzplantemplets', parameterName: 'ibzplantemplet' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 汇报填写角色
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzreportroleconfigs', parameterName: 'ibzreportroleconfig' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 人员树导航视图
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc8(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysemployees', parameterName: 'sysemployee' },
            { pathName: 'treeexpview', parameterName: 'treeexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 用例库
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto15(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzlibs', parameterName: 'ibzlib' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 员工年度统计（产品经理）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickPOAppFunc(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'useryearworkstats', parameterName: 'useryearworkstats' },
        ];
        const view: any = {
            viewname: 'user-year-work-stats-edit-view',
            title: (this.$t('entities.useryearworkstats.views.editview.title') as any),
            height: 0,
            width: 0,
            placement: 'DRAWER_TOP'
        };
        const appdrawer = this.$appdrawer.openDrawer(view, JSON.parse(JSON.stringify(this.context)), viewparam);
        appdrawer.subscribe((result: any) => {
            console.log(result);
        });
    }
    
    /**
     * 打开项目主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projectportalview', parameterName: 'projectportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 我的收藏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto23(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzfavorites', parameterName: 'ibzfavorites' },
            { pathName: 'tabexpview', parameterName: 'tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 打开产品主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto1(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'productportalview', parameterName: 'productportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 打开测试主页
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto9(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'testportalview', parameterName: 'testportalview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 全文检索
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc9(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibizproindices', parameterName: 'ibizproindex' },
            { pathName: 'listview', parameterName: 'listview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 项目边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto5(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'projects', parameterName: 'project' },
            { pathName: 'leftsidebarlistview', parameterName: 'leftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 系统更新日志
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc3(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'sysupdatelogs', parameterName: 'sysupdatelog' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 插件管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickPluginManagement(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'usr3tabexpview', parameterName: 'usr3tabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    /**
     * 人员管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc2(item: any = {}){
       const localdata: any = this.$store.getters.getLocalData();
       const url = `http://172.16.240.110:10001/#/index/null/sysdepartments/null/treeexpview`;
       window.open(url, '_blank');
    }
    
    /**
     * todo主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto29(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'todos', parameterName: 'todo' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * iBiz软件生产管理
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto8(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'htmlview', parameterName: 'htmlview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * bug主数据视图（链接）
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto26(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'bugs', parameterName: 'bug' },
            { pathName: 'maindashboardview_link', parameterName: 'maindashboardview_link' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 测试边栏
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAuto11(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'products', parameterName: 'product' },
            { pathName: 'testleftsidebarlistview', parameterName: 'testleftsidebarlistview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 系统配置
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc6(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzproconfigs', parameterName: 'ibzproconfig' },
            { pathName: 'gridview', parameterName: 'gridview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }
    
    /**
     * 统计
     *
     * @param {*} [item={}]
     * @memberof Zentao
     */
    public clickAppFunc(item: any = {}) {
        const viewparam: any = {};
        Object.assign(viewparam, {});
        const deResParameters: any[] = [];
        const parameters: any[] = [
            { pathName: 'ibzmyterritories', parameterName: 'ibzmyterritory' },
            { pathName: 'statstabexpview', parameterName: 'statstabexpview' },
        ];
        const path: string = this.$viewTool.buildUpRoutePath(this.$route, {}, deResParameters, parameters, [], viewparam);
        if(Object.is(this.$route.fullPath,path)){
            return;
        }
        this.$nextTick(function(){
            this.$router.push(path);
        })
    }

    /**
     * 数据加载
     *
     * @param {*} data
     * @memberof ZentaoBase
     */
    public load(data: any) {
        this.handleMenusResource(this.menuMode.getAppMenuItems());
    }

    /**
     * 通过统一资源标识计算菜单
     *
     * @param {*} data
     * @memberof ZentaoBase
     */
    public handleMenusResource(inputMenus:Array<any>){
        let mainMenus: Array<any> = [];
        if(this.$store.getters['authresource/getEnablePermissionValid']){
            this.computedEffectiveMenus(inputMenus);
            this.computeParentMenus(inputMenus);
        }
        this.dataProcess(inputMenus);
        if(inputMenus && inputMenus.length > 0){
            inputMenus.forEach((menu: any) =>{
                if(Object.is(menu.name,'main_menus') && menu.items.length > 0){
                    mainMenus = [...menu.items];
                }
            })
        }
        this.menus = inputMenus;
        this.mainMenus = mainMenus;
        this.doMenuSelect();
    }

    /**
     * 计算有效菜单项
     *
     * @param {*} inputMenus
     * @memberof ZentaoBase
     */
    public computedEffectiveMenus(inputMenus:Array<any>){
        inputMenus.forEach((_item:any) =>{
            if(!this.authService.getMenusPermission(_item)){
                _item.hidden = true;
                if (_item.items && _item.items.length > 0) {
                    this.computedEffectiveMenus(_item.items);
                }
            }
        })
    }

    /**
     * 计算父项菜单项是否隐藏
     *
     * @param {*} inputMenus
     * @memberof ZentaoBase
     */
    public computeParentMenus(inputMenus:Array<any>){
        if(inputMenus && inputMenus.length >0){
            inputMenus.forEach((item:any) =>{
                if(item.hidden && item.items && item.items.length >0){
                    item.items.map((singleItem:any) =>{
                        if(!singleItem.hidden){
                            item.hidden = false;
                        }else{
                            if(singleItem.items && singleItem.items.length >0){
                                singleItem.items.map((grandsonItem:any) =>{
                                    if(!grandsonItem.hidden){
                                        item.hidden = false;
                                    }
                                })
                            }
                        }
                        if(item.items && item.items.length >0){
                            this.computeParentMenus(item.items);
                        }
                    })
                }
            })
        }
    }

    /**
     * 数据处理
     *
     * @public
     * @param {any[]} items
     * @memberof ZentaoBase
     */
    public dataProcess(items: any[]): void {
        items.forEach((_item: any) => {
            if (_item.expanded) {
                this.defaultOpeneds.push(_item.name);
            }
            if (_item.items && _item.items.length > 0) {
                this.dataProcess(_item.items)
            }
        });
    }

    /**
     * 提示框主题样式
     *
     * @readonly
     * @type {string}
     * @memberof ZentaoBase
     */
    get popperClass(): string {
        return 'app-popper-menu ' + this.selectTheme;
    }
}