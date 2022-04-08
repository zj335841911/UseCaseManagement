/**
 * TabExpViewtabexppanel 部件模型
 *
 * @export
 * @class TabExpViewtabexppanelModel
 */
export default class TabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabexppanelModel
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