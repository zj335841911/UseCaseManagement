/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainModel
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
        name: 'role',
        prop: 'role',
        dataType: 'TEXT',
      },
      {
        name: 'yearvisits',
        prop: 'yearvisits',
        dataType: 'INT',
      },
      {
        name: 'yearactioncnt',
        prop: 'yearactioncnt',
        dataType: 'INT',
      },
      {
        name: 'yearlogcnt',
        prop: 'yearlogcnt',
        dataType: 'INT',
      },
      {
        name: 'yearestimatecnt',
        prop: 'yearestimatecnt',
        dataType: 'INT',
      },
      {
        name: 'yearcasecnt',
        prop: 'yearcasecnt',
        dataType: 'INT',
      },
      {
        name: 'yearbugcnt',
        prop: 'yearbugcnt',
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
        name: 'yearstorycnt',
        prop: 'yearstorycnt',
        dataType: 'INT',
      },
      {
        name: 'judgerole',
        prop: 'judgerole',
        dataType: 'TEXT',
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