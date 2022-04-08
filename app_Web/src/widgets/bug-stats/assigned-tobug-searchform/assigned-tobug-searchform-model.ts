/**
 * AssignedTOBug 部件模型
 *
 * @export
 * @class AssignedTOBugModel
 */
export default class AssignedTOBugModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof AssignedTOBugModel
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
        name: 'n_assignedto_eq',
        prop: 'assignedto',
        dataType: 'SSCODELIST',
      },
    ]
  }

}