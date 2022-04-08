/**
 * ProductStorySum 部件模型
 *
 * @export
 * @class ProductStorySumModel
 */
export default class ProductStorySumModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ProductStorySumModel
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
        name: 'n_id_eq',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'productsum',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}