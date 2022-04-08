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
        name: 'srfupdatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'projectweeklyid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'projectweeklyname',
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
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'projectname',
        prop: 'projectname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'pm',
        prop: 'pm',
        dataType: 'TEXT',
      },
      {
        name: 'week',
        prop: 'week',
        dataType: 'TEXT',
      },
      {
        name: 'totalestimates1',
        prop: 'totalestimates',
        dataType: 'FLOAT',
      },
      {
        name: 'tasks',
        prop: 'tasks',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'begindatestats',
        prop: 'begindatestats',
        dataType: 'TEXT',
      },
      {
        name: 'enddatestats',
        prop: 'enddatestats',
        dataType: 'TEXT',
      },
      {
        name: 'ibzpro_projectweeklyid',
        prop: 'projectweeklyid',
        dataType: 'GUID',
      },
      {
        name: 'ibizproprojectweekly',
        prop: 'projectweeklyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}