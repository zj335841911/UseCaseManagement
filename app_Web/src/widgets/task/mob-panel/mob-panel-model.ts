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
        codelist:{tag:'Task__pri',codelistType:'STATIC'},
        prop: 'pri'
      },
      {
        name: 'name',
        prop: 'name'
      },
      {
        name: 'status',
        codelist:{tag:'Task__status',codelistType:'STATIC'},
        prop: 'status'
      },
      {
        name: 'assignedto',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'assignedto'
      },
      {
        name: 'left',
        prop: ' left'
      }
    ]
  }
}