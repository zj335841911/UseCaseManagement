/**
 * ProductCreatStroy_PO 部件模型
 *
 * @export
 * @class ProductCreatStroy_POModel
 */
export default class ProductCreatStroy_POModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductCreatStroy_POModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'productsum',
        prop: 'id',
      },
      {
        name: 'name',
      },
      {
        name: 'po',
      },
      {
        name: 'plan',
      },
      {
        name: 'begin',
      },
      {
        name: 'end',
      },
      {
        name: 'waitstorycnt',
      },
      {
        name: 'activestorycnt',
      },
      {
        name: 'changedstorycnt',
      },
      {
        name: 'closedstorycnt',
      },
      {
        name: 'storycnt',
      },
      {
        name: 'bugcnt',
      },
    ]
  }


}
