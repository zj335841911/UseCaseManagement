/**
 * ConcatList 部件模型
 *
 * @export
 * @class ConcatListModel
 */
export default class ConcatListModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ConcatListModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'userlist',
      },
      {
        name: 'listname',
      },
      {
        name: 'usercontact',
        prop: 'id',
      },
      {
        name: 'account',
      },
    ]
  }


}