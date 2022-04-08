export const Environment = {
    // 原型示例数模式
    SampleMode: false,
    // 应用名称
    AppName: 'Web',
    // 应用 title
    AppTitle: 'iBiz软件生产管理',
    // 应用基础路径
    BaseUrl: '',
    // 系统名称
    SysName: 'pms',
    // 登录模式，目前支持UAA、CAS、Default
    LoginMode: 'Default',
    // 远程登录地址，本地开发调试使用
    RemoteLogin: 'ibizutil/login',
    // 文件导出
    ExportFile: 'ibizutil/download',
    // 文件上传
    UploadFile: 'ibizutil/upload',
    // 是否为pc端应用
    isAppMode: true,
    // 统一地址
    uniteAddress: "http://172.16.100.202:8114",
    // 是否开启权限认证
    enablePermissionValid: false,
    // 菜单权限模式，可选值：RT(RT模式),RESOURCE(资源模式),MINIX(混合模式),默认MINIX
    menuPermissionMode: 'MINIX',
    // 是否为开发模式
    devMode: true,
    // 项目模板地址
    ProjectUrl: "http://demo.ibizlab.cn/groups/ibizr7pfstdtempl/ibizvuer7plus",
    // 配置平台地址
    StudioUrl: "http://neko.org.cn:3333/",
    // 方案标识
    SlnId: "506FF789-2742-4C35-A91D-E3990C379D41",
    // 系统标识
    SysId: "3A921F6B-613D-4975-ACD6-79565D82E1DE",
    // 前端应用标识
    AppId: "67ca55365f7abcc05c30f4fba9f8ee37",
    // 项目发布文件地址
    PublishProjectUrl: 'https://oauth2:0fc5b56b52f5ad87efd3850b6536e034@gitee.com/ibizlab/iBizPMS.git',
    // ibiz开放平台地址
    ibizlabtUrl: 'https://www.ibizlab.cn',
    // ibiz论坛地址
    ibizbbstUrl: 'https://bbs.ibizlab.cn',
    // LoginModel=UAA时生效
    LoginUrl: 'http://wwwts.ibizlab.cn/login',
    // LoginModel=CAS时生效
    CasUrl: 'http://passportcs.ibizlab.cn',
    // debug栏打开sln还是mos
    debugOpenMode: 'mos',
    // 默认登录账户与密码
    defaultLogin: '',
    defaultPwd: '',
    // 是否启用主题
    isEnableTheme: true,
    // 界面导航条分隔符 
    NavBarDelimiter: '/',
    // 防抖时间（单位：ms）
    debounceTime: 300,
    // 是否为Studio的系统
    isStudioSystem: false
};
// 挂载外部配置文件
if ((window as any).Environment) {
    Object.assign(Environment, (window as any).Environment);
}