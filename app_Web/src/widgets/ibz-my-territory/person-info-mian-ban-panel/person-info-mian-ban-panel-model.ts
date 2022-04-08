/**
 * PersonInfoMianBan 部件模型
 *
 * @export
 * @class PersonInfoMianBanModel
 */
export default class PersonInfoMianBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof PersonInfoMianBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'mytodocnt',
        prop: 'mytodocnt'
      },
      {
        name: 'mystorys',
        prop: 'mystorys'
      },
      {
        name: 'mytasks',
        prop: 'mytasks'
      },
      {
        name: 'mybugs',
        prop: 'mybugs'
      },
      {
        name: 'myfavoritebugs',
        prop: 'myfavoritebugs'
      }
    ]
  }
}