/**
 * TabExpViewtabviewpanel2 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanel2Model
 */
export default class TabExpViewtabviewpanel2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanel2Model
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