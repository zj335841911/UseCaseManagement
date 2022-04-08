/**
 * LastUpdate 部件模型
 *
 * @export
 * @class LastUpdateModel
 */
export default class LastUpdateModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof LastUpdateModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'updatedate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'createman',
      },
      {
        name: 'createdate',
      },
      {
        name: 'sysupdatelog',
        prop: 'sysupdatelogid',
      },
      {
        name: 'updatebranch',
      },
      {
        name: 'updatefeatures',
      },
      {
        name: 'updesc',
      },
      {
        name: 'sysupdatelogname',
      },
      {
        name: 'latestupdate',
      },
      {
        name: 'update',
      },
    ]
  }


}
