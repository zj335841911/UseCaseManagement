/**
 * TestCaseStats 部件模型
 *
 * @export
 * @class TestCaseStatsModel
 */
export default class TestCaseStatsModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof TestCaseStatsModel
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
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
    ]
  }

}