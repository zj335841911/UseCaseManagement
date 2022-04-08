// js基础扩展
import './utils/js-basic-extension';
// 导出装饰器
export { VueLifeCycleProcessing, Watch } from './decorators/VueLifeCycleProcessing';
export { SingletonMode } from './decorators/SingletonMode';
// 视图基类
export { ViewBase } from './view/ViewBase';
export { IndexViewBase } from './view/IndexViewBase';
export { GridViewBase } from './view/GridViewBase';
export { GridView9Base } from './view/GridView9Base';
export { GanttViewBase } from './view/GanttViewBase';
export { GanttView9Base } from './view/GanttView9Base';
export { EditViewBase } from './view/EditViewBase';
export { EditView9Base } from './view/EditView9Base';
export { DashboardViewBase } from './view/DashboardViewBase';
export { DashboardView9Base } from './view/DashboardView9Base';
export { TabExpViewBase } from './view/TabExpViewBase';
export { PickupViewBase } from './view/PickupViewBase';
export { PickupGridViewBase } from './view/PickupGridViewBase';
export { MPickupViewBase } from './view/MPickupViewBase';
export { KanBanViewBase } from './view/KanBanViewBase';
export { ListViewBase } from './view/ListViewBase';
export { ListView9Base } from './view/ListView9Base';
export { CalendarViewBase } from './view/CalendarViewBase';
export { CalendarView9Base } from './view/CalendarView9Base';
export { PortalViewBase } from './view/PortalViewBase';
export { ChartView9Base } from './view/ChartView9Base';
export { ChartViewBase } from './view/ChartViewBase';
export { FormPickupDataViewBase } from './view/FormPickupDataViewBase';
export { GridExpViewBase } from './view/GridExpViewBase';
export { MEditView9Base } from './view/MEditView9Base';
export { EditView2Base } from './view/EditView2Base';
export { EditView3Base } from './view/EditView3Base';
export { EditView4Base } from './view/EditView4Base';
export { TabFormView9Base } from './view/TabFormView9Base';
export { DataView9Base } from './view/DataView9Base';
export { DataViewBase } from './view/DataViewBase';
export { PickupView3Base } from './view/PickupView3Base';
export { TreeExpViewBase } from './view/TreeExpViewBase';
export { TreeView9Base } from './view/TreeView9Base';
export { TreeGridExViewBase } from './view/TreeGridExViewBase';
export { TreeViewBase } from './view/TreeViewBase';
export { PickupTreeViewBase } from './view/PickupTreeViewBase';
export { WizardViewBase } from './view/WizardViewBase';
export { CalendarExpViewBase } from './view/CalendarExpViewBase';
export { DataViewExpViewBase } from './view/DataViewExpViewBase';
export { ListExpViewBase } from './view/ListExpViewBase';
export { IndexPickupDataViewBase } from './view/IndexPickupDataViewBase';
export { OptionViewBase } from './view/OptionViewBase';
// 部件基类
export { MainControlBase } from './widgets/MainControlBase';
export { FormControlBase } from './widgets/FormControlBase';
export { GridControlBase } from './widgets/GridControlBase';
export { GridExpBarControlBase } from './widgets/GridExpBarControlBase';
export { ListControlBase } from './widgets/ListControlBase';
export { EditFormControlBase } from './widgets/EditFormControlBase';
export { MDControlBase } from './widgets/MDControlBase';
export { PanelControlBase } from './widgets/PanelControlBase';
export { SearchFormControlBase } from './widgets/SearchFormControlBase';
export { TabExpPanelControlBase } from './widgets/TabExpPanelControlBase';
export { DataViewExpBarControlBase } from './widgets/DataViewExpBarControlBase';
export { ListViewExpBarControlBase } from './widgets/ListViewExpBarControlBase';
export { TreeExpBarControlBase } from './widgets/TreeExpBarControlBase';
export { CalendarViewExpBarControlBase } from './widgets/CalendarViewExpBarControlBase';
// 组件 Start
import { AppLayout } from './components/layout/app-layout/app-layout';
import { AppHeader } from './components/layout/app-header/app-header';
import { AppHeaderMenus } from './components/app-header-menus/app-header-menus';
import { AppContent } from './components/layout/app-content/app-content';
import { AppContentLeftExp } from './components/layout/app-content-left-exp/app-content-left-exp';
import { AppContentLeftNavMenu } from './components/layout/app-content-left-nav-menu/app-content-left-nav-menu';
import { AppContentBottomExp } from './components/layout/app-content-bottom-exp/app-content-bottom-exp';
import { AppFooter } from './components/layout/app-footer/app-footer';
import { AppBreadcrumb } from './components/app-breadcrumb/app-breadcrumb';
import { MenuIcon } from './components/menu-icon/menu-icon';
import { UserInfo } from './components/user-info/user-info';
import { ExpControlLayout } from './components/exp-control-layout/exp-control-layout';
import { StudioViewStyle2 } from './components/studio-view-style2/studio-view-style2';
import { StudioView } from './components/studio-view/studio-view';
import { StudioEmbedView } from './components/studio-embed-view/studio-embed-view';
import { StudioEmbedViewStyle2 } from './components/studio-embed-view-style2/studio-embed-view-style2';
import { ViewToolbar } from './components/view-toolbar/view-toolbar';
import { ViewConfigActions } from './components/view-config-actions/view-config-actions';
import HtmlContainer from './components/html-container/html-container.vue';
import { ViewQuickGroupTab } from './components/view-quick-group-tab/view-quick-group-tab';
import AppAfterTime from './components/app-after-time/app-after-time.vue';
import AppUserSpan  from './components/app-user-span/app-user-span.vue';
// 组件 End
// 服务 Start
import { acc } from './message-center/app-communications-center';
import { AppService } from './service/app-service/AppService';
import { FooterItemsService } from './service/FooterItemsService';
import { TopItemsService } from './service/TopItemsService';
import { UIStateService } from './service/UIStateService';
import { OpenViewService } from './service/OpenViewService';
export { acc, AppService, FooterItemsService, TopItemsService, UIStateService, OpenViewService };
// 服务 End
// 指令 Start
import { NotificationSignal } from './directives/notification-signal/notification-signal';
// 指令 End

// 注册Vue插件
export const StudioCore = {
    install(v: any, opt: any) {
        // 在非开发模式下，禁止console输出内容。
        if (!(process?.env?.NODE_ENV === 'development')) {
            console.log = function () {};
            console.error = function () {};
            console.warn = function () {};
            console.info = function () {};
        }
        // 注册服务
        v.prototype.$acc = acc;
        v.prototype.$appService = new AppService();
        v.prototype.$footerRenderService = new FooterItemsService();
        v.prototype.$topRenderService = new TopItemsService();
        v.prototype.$uiState = new UIStateService();
        v.prototype.$openViewService = new OpenViewService();
        // 注册组件
        v.component('app-layout', AppLayout);
        v.component('app-header', AppHeader);
        v.component('app-header-menus', AppHeaderMenus);
        v.component('app-content', AppContent);
        v.component('app-content-left-exp', AppContentLeftExp);
        v.component('app-content-left-nav-menu', AppContentLeftNavMenu);
        v.component('app-content-bottom-exp', AppContentBottomExp);
        v.component('app-footer', AppFooter);
        v.component('app-breadcrumb', AppBreadcrumb);
        v.component('exp-control-layout', ExpControlLayout);
        v.component('menu-icon', MenuIcon);
        v.component('user-info', UserInfo);
        v.component('studio-view-style2', StudioViewStyle2);
        v.component('studio-view', StudioView);
        v.component('studio-embed-view', StudioEmbedView);
        v.component('studio-embed-view-style2', StudioEmbedViewStyle2);
        v.component('view-toolbar', ViewToolbar);
        v.component('view-config-actions', ViewConfigActions);
        v.component('html-container', HtmlContainer);
        v.component('view-quick-group-tab', ViewQuickGroupTab);
        v.component('app-after-time', AppAfterTime);
        v.component('app-user-span', AppUserSpan);
        // 注册指令
        v.directive('notification-signal', NotificationSignal);
    },
};
