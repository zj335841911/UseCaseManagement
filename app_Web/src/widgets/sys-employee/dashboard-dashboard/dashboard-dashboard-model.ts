/**
 * Dashboard 部件模型
 *
 * @export
 * @class DashboardModel
 */
export default class DashboardModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DashboardModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'sysemployee',
        prop: 'userid',
      },
      {
        name: 'username',
      },
      {
        name: 'personname',
      },
      {
        name: 'usercode',
      },
      {
        name: 'loginname',
      },
      {
        name: 'password',
      },
      {
        name: 'domains',
      },
      {
        name: 'mdeptid',
      },
      {
        name: 'mdeptcode',
      },
      {
        name: 'mdeptname',
      },
      {
        name: 'bcode',
      },
      {
        name: 'orgid',
      },
      {
        name: 'orgcode',
      },
      {
        name: 'orgname',
      },
      {
        name: 'nickname',
      },
      {
        name: 'sex',
      },
      {
        name: 'phone',
      },
      {
        name: 'email',
      },
      {
        name: 'avatar',
      },
      {
        name: 'addr',
      },
      {
        name: 'usericon',
      },
      {
        name: 'ipaddr',
      },
      {
        name: 'lang',
      },
      {
        name: 'memo',
      },
      {
        name: 'reserver',
      },
      {
        name: 'showorder',
      },
      {
        name: 'enable',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createman',
      },
      {
        name: 'updatedate',
      },
    ]
  }


}