/**
 * TabExpViewtabviewpanel 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanelModel
 */
export default class TabExpViewtabviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanelModel
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