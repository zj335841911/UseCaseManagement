/**
 * MainInfoView 部件模型
 *
 * @export
 * @class MainInfoViewModel
 */
export default class MainInfoViewModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainInfoViewModel
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
