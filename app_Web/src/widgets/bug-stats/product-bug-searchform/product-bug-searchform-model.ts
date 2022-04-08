/**
 * ProductBug 部件模型
 *
 * @export
 * @class ProductBugModel
 */
export default class ProductBugModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ProductBugModel
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
        name: 'openeddatelt',
      },
      {
        name: 'openeddategt',
      },
      {
        name: 'producteq',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'projecteq',
        prop: 'project',
        dataType: 'PICKUP',
      },
    ]
  }

}