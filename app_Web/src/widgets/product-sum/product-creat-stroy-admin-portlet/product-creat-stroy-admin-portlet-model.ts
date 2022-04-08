/**
 * ProductCreatStroy_admin 部件模型
 *
 * @export
 * @class ProductCreatStroy_adminModel
 */
export default class ProductCreatStroy_adminModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductCreatStroy_adminModel
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
