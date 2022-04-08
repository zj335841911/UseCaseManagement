/**
 * Quicksearchform 部件模型
 *
 * @export
 * @class QuicksearchformModel
 */
export default class QuicksearchformModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof QuicksearchformModel
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
    ]
  }

}