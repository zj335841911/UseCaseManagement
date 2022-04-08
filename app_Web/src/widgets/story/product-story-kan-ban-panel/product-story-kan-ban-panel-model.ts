/**
 * ProductStoryKanBan 部件模型
 *
 * @export
 * @class ProductStoryKanBanModel
 */
export default class ProductStoryKanBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ProductStoryKanBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'title',
        prop: 'title'
      },
      {
        name: 'pri',
        codelist:{tag:'Story__pri',codelistType:'STATIC'},
        prop: 'pri'
      },
      {
        name: 'status',
        codelist:{tag:'Story__status',codelistType:'STATIC'},
        prop: 'status'
      },
      {
        name: 'estimate',
        prop: 'estimate'
      },
      {
        name: 'srfkey',
        prop: 'id'
      },
      {
        name: 'stage',
        prop: 'stage'
      },
      {
        name: 'story',
        prop: 'story'
      },
      {
        name: 'isfavorites',
        prop: 'isfavorites'
      },
      {
        name: 'ischild',
        prop: 'ischild'
      }
    ]
  }
}