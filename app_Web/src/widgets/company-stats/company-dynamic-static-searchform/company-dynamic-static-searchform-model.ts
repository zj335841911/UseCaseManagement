/**
 * CompanyDynamicStatic 部件模型
 *
 * @export
 * @class CompanyDynamicStaticModel
 */
export default class CompanyDynamicStaticModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof CompanyDynamicStaticModel
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
        name: 'begin',
      },
      {
        name: 'end',
      },
    ]
  }

}