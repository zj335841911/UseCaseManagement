/**
 * MainTabExpViewtabexppanel 部件模型
 *
 * @export
 * @class MainTabExpViewtabexppanelModel
 */
export default class MainTabExpViewtabexppanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainTabExpViewtabexppanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'stories',
      },
      {
        name: 'marker',
      },
      {
        name: 'release',
        prop: 'id',
      },
      {
        name: 'sqlid',
      },
      {
        name: 'leftbugs',
      },
      {
        name: 'bugs',
      },
      {
        name: 'deleted',
      },
      {
        name: 'noticeusers',
      },
      {
        name: 'rebuild',
      },
      {
        name: 'name',
      },
      {
        name: 'date',
      },
      {
        name: 'status',
      },
      {
        name: 'releasetype',
      },
      {
        name: 'substatus',
      },
      {
        name: 'backgroundid',
      },
      {
        name: 'desc',
      },
      {
        name: 'files',
      },
      {
        name: 'frontapplication',
      },
      {
        name: 'productname',
      },
      {
        name: 'builder',
      },
      {
        name: 'buildname',
      },
      {
        name: 'builddate',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'branch',
      },
    ]
  }


}