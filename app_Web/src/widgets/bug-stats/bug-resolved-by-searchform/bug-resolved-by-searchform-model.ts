/**
 * BugResolvedBy 部件模型
 *
 * @export
 * @class BugResolvedByModel
 */
export default class BugResolvedByModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof BugResolvedByModel
  */
  public getDataItems(): any[] {
    return [
      {
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'n_product_eq',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'n_resolvedby_eq',
        prop: 'resolvedby',
        dataType: 'SSCODELIST',
      },
    ]
  }

}