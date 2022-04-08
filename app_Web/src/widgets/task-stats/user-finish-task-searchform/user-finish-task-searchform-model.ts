/**
 * UserFinishTask 部件模型
 *
 * @export
 * @class UserFinishTaskModel
 */
export default class UserFinishTaskModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof UserFinishTaskModel
  */
  public getDataItems(): any[] {
    return [
      {
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'n_project_eq',
        prop: 'project',
        dataType: 'TEXT',
      },
      {
        name: 'n_finishedby_eq',
        prop: 'finishedby',
        dataType: 'TEXT',
      },
    ]
  }

}