/**
 * CurSuitCaseGridView 部件模型
 *
 * @export
 * @class CurSuitCaseGridViewModel
 */
export default class CurSuitCaseGridViewModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CurSuitCaseGridViewModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'testsuite',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'lasteditedby',
      },
      {
        name: 'type',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'addedby',
      },
      {
        name: 'casecnt',
      },
      {
        name: 'desc',
      },
      {
        name: 'product',
      },
    ]
  }


}
