/**
 * ProductTeamPc 部件模型
 *
 * @export
 * @class ProductTeamPcModel
 */
export default class ProductTeamPcModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductTeamPcModel
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
      },
      {
        name: 'join',
        prop: 'join'
      },
      {
        name: 'days',
        prop: 'days'
      },
      {
        name: 'hours',
        prop: 'hours'
      },
      {
        name: 'total',
        prop: 'total'
      },
      {
        name: 'consumed',
        prop: 'consumed'
      },
      {
        name: 'left',
        prop: 'left'
      },
      {
        name: 'estimate',
        prop: 'estimate'
      },
      {
        name: 'id',
        prop: 'id'
      }
    ]
  }
}