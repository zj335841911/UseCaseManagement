import { Environment } from '@/environments/environment';

/**
 * 添加代码表
 *
 * @param state
 * @param codelists
 */
export const addCodeLists = (state: any, codelists: any) => {
    state.codelists = [];
    state.codelists = [...codelists];
};

/**
 * 添加本地应用数据
 *
 * @param state
 * @param localdata
 */
export const addLocalData = (state: any, localdata: any = {}) => {
    state.localdata = {};
    Object.assign(state.localdata, localdata);
    localStorage.setItem('localdata', JSON.stringify(state.localdata));
};

/**
 * 添加应用数据
 *
 * @param state
 * @param localdata
 */
export const addAppData = (state: any, appdata: string) => {
    state.appdata = appdata;
};

/**
 * 修改应用数据
 *
 * @param state
 * @param localdata
 */
export const updateAppData = (state: any, appdata: string) => {
    state.appdata = appdata;
};

/**
 * 更新代码表值
 *
 * @param state
 * @param param1
 */
export const updateCodeList = (state: any, { srfkey, items }: { srfkey: string; items: any[] }) => {
    const index = state.codelists.findIndex((_codelist: any) => Object.is(_codelist.srfkey, srfkey));
    if (index === -1) {
        console.log(`更新代码表，代码表「${srfkey}」不存在`);
        return;
    }
    state.codelists[index].items = [...items];
};

/**
 * 更新 z-index
 *
 * @param state
 * @param zIndex
 */
export const updateZIndex = (state: any, zIndex: number) => {
    state.zIndex = zIndex;
};

/**
 * 设置视图split
 *
 * @param state
 * @param {viewSplit: number, viewUID: string}
 */
export const setViewSplit = (state: any, args: { viewSplit: number; viewUID: string }) => {
    state.viewSplit[args.viewUID] = args.viewSplit;
};

/**
 * 添加拷贝数据
 *
 * @param state
 * @param localdata
 */
export const addCopyData = (state: any, args: { srfkey: string; copyData: any }) => {
    if (args && args.srfkey && args.copyData) {
        state.copyDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.copyData));
    }
};

/**
 * 添加单位数据
 *
 * @param state
 * @param args
 */
export const addOrgData = (state: any, args: { srfkey: string; orgData: any }) => {
    if (args && args.srfkey && args.orgData) {
        state.orgDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.orgData));
    }
};

/**
 * 添加部门数据
 *
 * @param state
 * @param args
 */
export const addDepData = (state: any, args: { srfkey: string; depData: any }) => {
    if (args && args.srfkey && args.depData) {
        state.depDataMap[args.srfkey] = JSON.parse(JSON.stringify(args.depData));
    }
};

/**
 * 添加视图信息
 *
 * @param state
 * @param args
 */
export const addViewMessage = (state: any, args: { tag: string; id: any }) => {
    if (args && args.tag && args.id) {
        state.viewMessage[args.tag] = args.id;
    }
};
