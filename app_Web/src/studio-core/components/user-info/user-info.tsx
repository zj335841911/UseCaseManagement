import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { localList } from '@locale/local-list';
import './user-info.less';
import { Environment } from '@/environments/environment';
import ProjectService from "@service/project/project-service";
import IbzproConfigService from "@service/ibzpro-config/ibzpro-config-service";
import { Subject } from 'rxjs';
import UserRealName from "@codelist/user-real-name";

/**
 * 用户信息
 *
 * @export
 * @class UserInfo
 * @extends {Vue}
 */
@Component({})
export class UserInfo extends Vue {
    /**
     * 部件名称
     *
     * @type {string}
     * @memberof UserInfo
     */
    @Prop()
    public ctrlName!: string;

    /**
     * 菜单项
     *
     * @type {any[]}
     * @memberof UserInfo
     */
    @Prop()
    public menus!: any[];

    /**
     * 语言名称
     *
     * @type {string}
     * @memberof UserInfo
     */
    public langTitle: string = '';

    /**
     * 是否启用主题
     *
     * @memberof AppHeaderMenus
     */
    public isEnableTheme = Environment.isEnableTheme;

    /**
     * 系统配置对象
     *
     * @type {ProjectService}
     * @memberof MainEditService
     */
    public ibzproConfigService: IbzproConfigService = new IbzproConfigService();

    /**
     * 菜单项点击
     *
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    @Emit('menu-click')
    public menuClick(item: any): any {}

    /**
     * 组件创建完毕
     *
     * @memberof UserInfo
     */
    public created(): void {
        const theme = localStorage.getItem('app-theme');
        if (theme) {
            this.changeTheme(theme);
        }
        const lang: string = this.$i18n.locale;
        const local: any = localList.find((_local: any) => Object.is(_local.type, lang));
        this.langTitle = local.name;
        this.initCodeList().then((res)=>{
            this.userImg = this.getUserImg(this.$store.getters.getAppData().context.srfloginname);
        });
    }

    /**
     * 菜单选中点击
     *
     * @protected
     * @param {string} name
     * @memberof UserInfo
     */
    protected onSelect(name: string): void {
        // 是否为切换主题
        if (name.indexOf('app-theme-') === 0) {
            this.changeTheme(name);
            return;
        }
        if (name.indexOf('app-manage-') === 0){

            let managementstatus = name.substring(11,name.length)
            this.ibzproConfigService.GetSystemConfig(this.$store.getters.getAppData().context,{managementstatus:managementstatus,userid:this.$store.getters.getAppData().context.srfuserid,username:this.$store.getters.getAppData().context.srfusername},true);
            // this.$store.getters.getAppData().settings.srfmstatus = managementstatus;
            // localStorage.setItem("srfmstatus",managementstatus);
            location.reload();
            return;
        }
        // 切换语言
        if (name.indexOf('app-lang-') === 0) {
            this.changeLang(name.substring(9));
            return;
        }
        if (name === 'custom-logout') {
            const get: Promise<any> = this.$http.get('/v7/logout');
            get.then((response: any) => {
                if (response && response.status === 200) {
                    this.$appService.logout();
                }
            }).catch((error: any) => {
                console.error(error);
            });
            return;
        }
        if (name === 'updatepwd') {
            let container: Subject<any> = this.$appmodal.openModal({ viewname: 'app-update-password', title: '修改密码',  width: 500, height: 320, }, {}, {});
            container.subscribe((result: any) => {
                if (!result || !Object.is(result.ret, 'OK')) {
                    return;
                }
            });
            return;
        }
        const item: any = this.findMenuByName(name);
        if (item) {
            this.menuClick(item);
        }
    }

    /**
     * 切换语言
     *
     * @protected
     * @param {string} name
     * @memberof UserInfo
     */
    protected changeLang(name: string) {
        this.$i18n.locale = name;
        const local: any = localList.find((_local: any) => Object.is(_local.type, name));
        this.langTitle = local.name;
        localStorage.setItem('local', name);
    }

    /**
     * 变更主题
     *
     * @protected
     * @param {string} name
     * @memberof UserInfo
     */
    protected changeTheme(name: string): void {
        const dom = document.body.parentElement;
        if (dom) {
            dom.classList.forEach((val: string) => {
                if (val.indexOf('app-theme') === 0) {
                    dom.classList.remove(val);
                }
            });
            dom.classList.add(name);
            localStorage.setItem('app-theme', name);
        }
    }


    /**
     * 根据名称查找菜单项
     *
     * @protected
     * @param {string} name
     * @param {any[]} [menus=this.menus]
     * @returns {*}
     * @memberof UserInfo
     */
    protected findMenuByName(name: string, menus: any[] = this.menus): any {
        let item: any;
        menus.find((menu: any) => {
            if (Object.is(menu.name, name)) {
                item = menu;
                return menu;
            }
            if (menu.items) {
                const subItem: any = this.findMenuByName(name, menu.items);
                if (subItem) {
                    item = subItem;
                    return subItem;
                }
            }
        });
        return item;
    }

    /**
     * 绘制菜单
     *
     * @protected
     * @param {any[]} items
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuItems(items: any[]): any {
        if (!items) {
            return;
        }
        return items.map((item: any) => {
            if (item.items && item.items.length > 0) {
                return this.renderMenuGroup(item);
            }
            return this.renderMenuItem(item);
        });
    }

    /**
     * 绘制菜单项
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuItem(item: any): any {
        if (item.hidden) {
            return;
        }
        return (
            <dropdownItem name={item.name} title={item.tooltip}>
                <menu-icon item={item} />
                {this.$t(`app.menus.${this.ctrlName}.${item.name}`)}
            </dropdownItem>
        );
    }

    /**
     * 绘制菜单分组
     *
     * @protected
     * @param {*} item
     * @returns {*}
     * @memberof UserInfo
     */
    protected renderMenuGroup(item: any): any {
        if (item.hidden) {
            return;
        }
        return (
            <dropdown class="user-menu-child" placement="left-start">
                <dropdownItem name={item.name} title={item.tooltip}>
                    <icon type="ios-arrow-back"></icon>
                    {this.$t(`app.menus.${this.ctrlName}.${item.name}`)}
                </dropdownItem>
                <dropdownMenu slot="list">{this.renderMenuItems(item.items)}</dropdownMenu>
            </dropdown>
        );
    }

    /**
     * 图片地址
     *
     * @param {*} nodes
     * @memberof EmpTreeBase
     */
    public imageUrl = 'ibizutil/download';

    /**
     * 用户头像
     */
    public userImg: String = '';

    /**
     * 用户真实姓名动态代码表服务
     */
    public userRealNameService: UserRealName = new UserRealName();

    /**
     * 用户真实名称
     */
    public UserRealName: any;

    /**
     * 初始化代码表
     */
    public async initCodeList():Promise<any>{
        this.UserRealName = await this.userRealNameService.getItems('UserRealName');
        return true;
    }

    /**
     * 获取代码表文本
     */
    public getCodeListText(tag:string,id:string):any{
        let _this: any = this;
        if(!_this[tag]){
            return id;
        }
        let index = _this[tag].findIndex((item:any) => { return item.value == id })
        return index > -1 ? _this[tag][index]: id;
    }

    /**
     * 获取用户头像
     */
    public getUserImg(value:string) {
        let icon = this.getCodeListText('UserRealName',value).icon;
        if (icon) {
            icon = JSON.parse(icon);
        }
        if(icon && icon[0] && icon[0].id){
            return `${this.imageUrl}/${icon[0].id}`;
        }
        return '';
    }

    /**
     * 绘制内容
     *
     * @returns {*}
     * @memberof UserInfo
     */
    public render(): any {
        const appData = this.$store.getters.getAppData();
        return (
            <dropdown
                class="studio-dropdown user-info-dropdown-menus"
                placement="bottom-end"
                on-on-click={(name: string) => this.onSelect(name)}
            >
                <div class="user-info">
                    {this.userImg ?
                        <span class="icon-span">
                            <img src={this.userImg} alt=""/>
                        </span> :
                        <span class="icon-span">
                            <svg
                                class="icon"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                            >
                                <path d="M512 85.333333c235.52 0 426.666667 191.146667 426.666667 426.666667s-191.146667 426.666667-426.666667 426.666667S85.333333 747.52 85.333333 512 276.48 85.333333 512 85.333333z m0 85.333334c-188.373333 0-341.333333 152.96-341.333333 341.333333s152.96 341.333333 341.333333 341.333333 341.333333-152.96 341.333333-341.333333-152.96-341.333333-341.333333-341.333333z m0 597.333333c-84.010667 0-161.450667-34.858667-213.333333-93.098667 26.154667-39.68 121.941333-77.568 213.333333-77.568s187.178667 37.888 213.333333 77.568C673.450667 733.141333 596.010667 768 512 768z m0-469.333333c70.826667 0 128 57.173333 128 128s-57.173333 128-128 128-128-57.173333-128-128 57.173333-128 128-128z"></path>
                            </svg>
                        </span>
                    }
                    <div class="user-head">{appData?.context?.srfusername}</div>
                </div>
                <template slot="list">
                    <dropdownMenu>
                        {this.renderMenuItems(this.menus)}
                        {localList.length > 1 ? (
                            <dropdown class="user-menu-child" placement="left-start">
                                <dropdownItem name="语言" title="切换语言">
                                    <i class="fa fa-language"></i>
                                    {this.langTitle}
                                </dropdownItem>
                                <dropdown-menu slot="list">
                                    {localList.map((item: any) => {
                                        return (
                                            <dropdown-item name={'app-lang-' + item.type}>{item.name}</dropdown-item>
                                        );
                                    })}
                                </dropdown-menu>
                            </dropdown>
                        ) : null}
                        {this.isEnableTheme ? (
                            <dropdown class="user-menu-child" placement="left-start">
                                <dropdownItem name="主题" title="切换主题">
                                    <icon type="ios-arrow-back"></icon>
                                    主题颜色
                                </dropdownItem>
                                <dropdownMenu slot="list">
                                    <dropdownItem name="app-theme-light" title="紫色主题">
                                        紫色
                                    </dropdownItem>
                                    <dropdownItem name="app-theme-dark" title="黑色主题">
                                        黑色
                                    </dropdownItem>
                                    <dropdownItem name="app-theme-dark-white" title="黑白主题">
                                        黑白
                                    </dropdownItem>
                                    <dropdownItem name="app-theme-blue-dark" title="蓝黑主题">
                                        蓝黑
                                    </dropdownItem>
                                    <dropdownItem name="app-theme-blue-white" title="蓝黑主题">
                                        蓝白
                                    </dropdownItem>
                                </dropdownMenu>
                            </dropdown>
                        ) : null}
                        {this.isEnableTheme ? (
                            <dropdown class="user-menu-child" placement="left-start">
                                <dropdownItem name="管理" title="切换管理现状">
                                    <icon type="ios-arrow-back"></icon>
                                    管理现状
                                </dropdownItem>
                                <dropdownMenu slot="list">
                                    <dropdownItem name="app-manage-product_project" title="产品-项目">
                                        {appData?.settings?.srfmstatus==='product_project'?(<span style={"color:#2196ff"}>产品-项目</span>):(<span>产品-项目</span>)}
                                    </dropdownItem>
                                    <dropdownItem name="app-manage-product_sprint" title="产品-冲刺">
                                        {appData?.settings?.srfmstatus==='product_sprint'?(<span style={"color:#2196ff"}>产品-冲刺</span>):(<span>产品-冲刺</span>)}
                                    </dropdownItem>
                                    <dropdownItem name="app-manage-product_iteration" title="产品-迭代">
                                       {appData?.settings?.srfmstatus==='product_iteration'?(<span style={"color:#2196ff"}> 产品-迭代</span>):(<span> 产品-迭代</span>)}
                                    </dropdownItem>
                                    <dropdownItem name="app-manage-project_sprint" title="项目-冲刺">
                                        {appData?.settings?.srfmstatus==='project_sprint'?(<span style={"color:#2196ff"}>项目-冲刺</span>):(<span>项目-冲刺</span>)}
                                    </dropdownItem>
                                    <dropdownItem name="app-manage-project_iteration" title="项目-迭代">
                                        {appData?.settings?.srfmstatus==='project_iteration'?(<span style={"color:#2196ff"}>项目-迭代</span>):(<span>项目-迭代</span>)}
                                    </dropdownItem>
                                </dropdownMenu>
                            </dropdown>
                        ) : null}
                        <dropdown className="user-menu-child" placement="left-start">
                            <dropdownItem name='updatepwd' title="修改密码">
                                <icon type="ios-create-outline"/>
                                <span>修改密码</span>
                            </dropdownItem>
                        </dropdown>
                        <dropdown class="user-menu-child" placement="left-start">
                            <dropdownItem name="custom-logout" title="退出登录">
                                <icon type="md-log-out" />
                                退出登录
                            </dropdownItem>
                        </dropdown>
                    </dropdownMenu>
                </template>
            </dropdown>
        );
    }
}
