/**
 * Mob 部件模型
 *
 * @export
 * @class MobModel
 */
export default class MobModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MobModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'pri',
        codelist:{tag:'Pri',codelistType:'STATIC'},
        prop: 'pri'
      },
      {
        name: 'name',
        prop: 'name'
      },
      {
        name: 'date1',
        prop: 'date1'
      },
      {
        name: 'begin',
        codelist:{tag:'BeginendDropList',codelistType:'STATIC'},
        prop: 'begin'
      },
      {
        name: 'status',
        codelist:{tag:'Todo__status',codelistType:'STATIC'},
        prop: 'status'
      }
    ]
  }
}