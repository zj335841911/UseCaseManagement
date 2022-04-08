/**
 * IbzLibCz 部件模型
 *
 * @export
 * @class IbzLibCzModel
 */
export default class IbzLibCzModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof IbzLibCzModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'desc',
      },
      {
        name: 'product',
      },
      {
        name: 'addeddate',
      },
      {
        name: 'ibzlib',
        prop: 'id',
      },
      {
        name: 'lastediteddate',
      },
      {
        name: 'addedby',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'type',
      },
      {
        name: 'lasteditedby',
      },
    ]
  }


}
