/**
 * Default 部件模型
 *
 * @export
 * @class DefaultModel
 */
export default class DefaultModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DefaultModel
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
        name: 'closed',
      },
      {
        name: 'expired',
      },
      {
        name: 'n_id_eq',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'n_plan_eq',
        prop: 'plan',
        dataType: 'BIGINT',
      },
      {
        name: 'productsum',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}