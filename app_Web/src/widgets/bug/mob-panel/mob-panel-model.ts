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
        codelist:{tag:'Bug__pri',codelistType:'STATIC'},
        prop: 'pri'
      },
      {
        name: 'title',
        prop: 'title'
      },
      {
        name: 'status',
        codelist:{tag:'Bug__status',codelistType:'STATIC'},
        prop: 'status'
      },
      {
        name: 'resolution',
        codelist:{tag:'Bug__resolution',codelistType:'STATIC'},
        prop: 'resolution'
      },
      {
        name: 'assignedto',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'assignedto'
      }
    ]
  }
}