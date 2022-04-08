/**
 * 视图事件
 */
const viewEvent = {
    // 模型加载
    MODEL_LOADED: 'ModelLoaded',
};
/**
 * 部件事件
 */
const ctrlEvent = {
    // 部件加载
    LOAD: 'load',
};
/**
 * 导出事件
 */
export const events = { view: viewEvent, ctrl: ctrlEvent };
/**
 * 部件类型
 */
const ctrlType = {
    //上下文菜单
    ContextMenu: 'CONTEXTMENU',
    //分页导航面板
    TabExpPanel: 'TABEXPPANEL',
    // 列表
    List: 'LIST',
    // 列表视图导航栏
    ListExpBar: 'LISTEXPBAR',
    // 单视图面板
    ViewPanel: '列表视图导航栏',
    // 卡片视图导航栏
    DataViewExpBar: 'DATAVIEWEXPBAR',
    // 向导面板
    WizardPanel: 'WIZARDPANEL',
    // 图表视图导航栏
    ChartExpBar: 'CHARTEXPBAR',
    // 地图视图导航栏
    MapExpBar: 'MAPEXPBAR',
    // 地图部件
    Map: 'MAP',
    // 多编辑视图面板
    MultiEditViewPanel: 'MULTIEDITVIEWPANEL',
    // 导航栏
    ExpBar: '导航栏',
    // 工具栏
    Toolbar: 'TOOLBAR',
    // 应用菜单
    AppMenu: 'APPMENU',
    // 报表面板
    RePortPanel: 'REPORTPANEL',
    // 搜索栏
    SearchBar: 'SEARCHBAR',
    // 搜索表单
    SearchForm: 'SEARCHFORM',
    // 数据关系分页部件
    DrTab: 'DRTAB',
    // 数据关系栏
    DrBar: 'DRBAR',
    // 数据图表
    Chart: 'CHART',
    // 数据看板
    Dashboard: 'DASHBOARD',
    // 数据表格
    Grid: 'GRID',
    // 数据视图
    DataView: 'DATAVIEW',
    // 日历视图导航栏
    CalendarExpBar: 'CALENDAREXPBAR',
    // 日历部件
    Calendar: 'CALENDAR',
    // 更新面板
    UpdatePanel: 'UPDATEPANEL',
    // 标题栏
    TitleBar: 'TITLEBAR',
    // 树表格
    TreeGrid: 'TREEGRID',
    // 树表格（增强）
    TreeGridEx: 'TREEGRIDEX',
    // 树视图
    TreeView: 'TREEVIEW',
    // 树视图导航栏
    TreeExpBar: 'TREEEXPBAR',
    // 流程导航栏
    WfExpBar: 'WFEXPBAR',
    // 状态向导面板
    StateWizardPanel: 'STATEWIZARDPANEL',
    // 甘特视图导航栏
    GanttExpBar: 'GANTTEXPBAR',
    // 甘特部件
    Gantt: 'GANTT',
    // 看板
    KanBan: 'KANBAN',
    // 自定义部件
    Custom: 'CUSTOM',
    // 表单
    Form: 'FORM',
    // 表格视图导航栏
    GridExpBar: 'GRIDEXPBAR',
    // 视图布局面板
    ViewLayoutPanel: 'VIEWLAYOUTPANEL',
    // 选择视图面板
    PickupViewPanel: 'PICKUPVIEWPANEL',
    // 门户部件
    Portlet: 'PORTLET',
    // 面板
    Panel: 'PANEL',
};
/**
 * 部件类型
 */
export const ctrl = { type: ctrlType };
