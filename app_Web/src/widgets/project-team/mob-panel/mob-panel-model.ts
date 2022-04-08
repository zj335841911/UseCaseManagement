/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export default class MobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'account',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'account'
      },
      {
        name: 'role',
        prop: 'role'
      }
    ]
  }
}