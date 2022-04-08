/**
 * ProductBugcnt_Qa 部件模型
 *
 * @export
 * @class ProductBugcnt_QaModel
 */
export default class ProductBugcnt_QaModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductBugcnt_QaModel
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
