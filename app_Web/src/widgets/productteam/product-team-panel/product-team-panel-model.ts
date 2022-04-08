/**
 * ProductTeam 部件模型
 *
 * @export
 * @class ProductTeamModel
 */
export default class ProductTeamModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductTeamModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'account',
        prop: 'account'
      }
    ]
  }
}