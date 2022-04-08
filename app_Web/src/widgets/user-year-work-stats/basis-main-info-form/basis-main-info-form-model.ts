/**
 * BasisMainInfo 部件模型
 *
 * @export
 * @class BasisMainInfoModel
 */
export default class BasisMainInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof BasisMainInfoModel
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
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'srftempmode',
      },
      {
        name: 'srfuf',
      },
      {
        name: 'srfdeid',
      },
      {
        name: 'srfsourcekey',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'curyear',
        prop: 'curyear',
        dataType: 'TEXT',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'TEXT',
      },
      {
        name: 'realname',
        prop: 'realname',
        dataType: 'TEXT',
      },
      {
        name: 'judgerole',
        prop: 'judgerole',
        dataType: 'TEXT',
      },
      {
        name: 'visits',
        prop: 'visits',
        dataType: 'INT',
      },
      {
        name: 'yearactioncnt',
        prop: 'yearactioncnt',
        dataType: 'INT',
      },
      {
        name: 'yearbugcnt',
        prop: 'yearbugcnt',
        dataType: 'INT',
      },
      {
        name: 'yearlogcnt',
        prop: 'yearlogcnt',
        dataType: 'INT',
      },
      {
        name: 'yearcasecnt',
        prop: 'yearcasecnt',
        dataType: 'INT',
      },
      {
        name: 'yearvisits',
        prop: 'yearvisits',
        dataType: 'INT',
      },
      {
        name: 'yearstorycnt',
        prop: 'yearstorycnt',
        dataType: 'INT',
      },
      {
        name: 'yearproductcnt',
        prop: 'yearproductcnt',
        dataType: 'INT',
      },
      {
        name: 'yearplancnt',
        prop: 'yearplancnt',
        dataType: 'INT',
      },
      {
        name: 'yearestimatecnt',
        prop: 'yearestimatecnt',
        dataType: 'INT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'useryearworkstats',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}