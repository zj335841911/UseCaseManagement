/**
 * TreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class TreeExpViewtreeexpbarModel
 */
export default class TreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TreeExpViewtreeexpbarModel
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