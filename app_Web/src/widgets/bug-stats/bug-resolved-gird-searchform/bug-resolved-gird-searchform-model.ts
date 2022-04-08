/**
 * BugResolvedGird 部件模型
 *
 * @export
 * @class BugResolvedGirdModel
 */
export default class BugResolvedGirdModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof BugResolvedGirdModel
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
        name: 'n_dept_eq',
        prop: 'dept',
        dataType: 'SSCODELIST',
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