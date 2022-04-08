/**
 * Workload 部件模型
 *
 * @export
 * @class WorkloadModel
 */
export default class WorkloadModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof WorkloadModel
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
        name: 'dept',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
      },
      {
        name: 'workday',
        prop: 'workday',
        dataType: 'INT',
      },
      {
        name: 'everydaytime',
      },
      {
        name: 'assign',
        prop: 'assign',
        dataType: 'TEXT',
      },
    ]
  }

}