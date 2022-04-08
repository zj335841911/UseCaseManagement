/**
 * TabExpViewtabviewpanel4 部件模型
 *
 * @export
 * @class TabExpViewtabviewpanel4Model
 */
export default class TabExpViewtabviewpanel4Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TabExpViewtabviewpanel4Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'createman',
      },
      {
        name: 'ibzfavorites',
        prop: 'ibzfavoritesid',
      },
      {
        name: 'createdate',
      },
      {
        name: 'updateman',
      },
      {
        name: 'objectid',
      },
      {
        name: 'account',
      },
      {
        name: 'ibzfavoritesname',
      },
      {
        name: 'updatedate',
      },
    ]
  }


}