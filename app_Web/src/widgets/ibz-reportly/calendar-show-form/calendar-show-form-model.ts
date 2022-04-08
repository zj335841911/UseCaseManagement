/**
 * CalendarShow 部件模型
 *
 * @export
 * @class CalendarShowModel
 */
export default class CalendarShowModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof CalendarShowModel
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
        prop: 'ibzreportlyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzreportlyname',
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
        name: 'ibz_reportlyid',
        prop: 'ibzreportlyid',
        dataType: 'ACID',
      },
      {
        name: 'ibz_reportlyname',
        prop: 'ibzreportlyname',
        dataType: 'TEXT',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'SSCODELIST',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'content',
        prop: 'content',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'issubmit',
        prop: 'issubmit',
        dataType: 'SSCODELIST',
      },
      {
        name: 'ibzreportly',
        prop: 'ibzreportlyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}