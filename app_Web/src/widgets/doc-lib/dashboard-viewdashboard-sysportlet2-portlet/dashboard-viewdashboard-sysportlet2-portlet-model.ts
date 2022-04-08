/**
 * DashboardViewdashboard_sysportlet2 部件模型
 *
 * @export
 * @class DashboardViewdashboard_sysportlet2Model
 */
export default class DashboardViewdashboard_sysportlet2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof DashboardViewdashboard_sysportlet2Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'collector',
      },
      {
        name: 'acl',
      },
      {
        name: 'deleted',
      },
      {
        name: 'groups',
      },
      {
        name: 'doclib',
        prop: 'id',
      },
      {
        name: 'users',
      },
      {
        name: 'main',
      },
      {
        name: 'name',
      },
      {
        name: 'order',
      },
      {
        name: 'project',
      },
      {
        name: 'product',
      },
      {
        name: 'doccnt',
      },
      {
        name: 'doclibtype',
      },
      {
        name: 'projectname',
      },
      {
        name: 'productname',
      },
    ]
  }


}
