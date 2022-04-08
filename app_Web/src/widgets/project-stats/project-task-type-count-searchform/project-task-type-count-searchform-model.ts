/**
 * ProjectTaskTypeCount 部件模型
 *
 * @export
 * @class ProjectTaskTypeCountModel
 */
export default class ProjectTaskTypeCountModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ProjectTaskTypeCountModel
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
        name: 'n_status_eq',
        prop: 'status',
        dataType: 'TEXT',
      },
      {
        name: 'n_begin_gtandeq',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'n_end_ltandeq',
        prop: 'end',
        dataType: 'DATE',
      },
    ]
  }

}