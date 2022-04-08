/**
 * TaskKanBan 部件模型
 *
 * @export
 * @class TaskKanBanModel
 */
export default class TaskKanBanModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TaskKanBanModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'name',
        prop: 'name'
      },
      {
        name: 'deadline',
        prop: 'deadline'
      },
      {
        name: 'delay',
        prop: 'delay'
      },
      {
        name: 'assignedto',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'assignedto'
      },
      {
        name: 'left',
        prop: 'left'
      },
      {
        name: 'project',
        prop: 'project'
      },
      {
        name: 'module',
        prop: 'module'
      },
      {
        name: 'srfkey',
        prop: 'id'
      },
      {
        name: 'story',
        prop: 'story'
      },
      {
        name: 'pri',
        prop: 'pri'
      },
      {
        name: 'desc',
        prop: 'desc'
      },
      {
        name: 'mailto',
        prop: 'mailto'
      },
      {
        name: 'parent',
        prop: 'parent'
      },
      {
        name: 'eststarted',
        prop: 'eststarted'
      },
      {
        name: 'consumed',
        prop: 'consumed'
      },
      {
        name: 'color',
        prop: 'color'
      },
      {
        name: 'isfavorites',
        prop: ' isfavorites'
      },
      {
        name: 'status1',
        prop: 'status1'
      },
      {
        name: 'tasktype',
        prop: 'tasktype'
      }
    ]
  }
}