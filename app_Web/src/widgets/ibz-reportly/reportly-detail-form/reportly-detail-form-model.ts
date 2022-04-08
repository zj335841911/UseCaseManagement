/**
 * ReportlyDetail 部件模型
 *
 * @export
 * @class ReportlyDetailModel
 */
export default class ReportlyDetailModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ReportlyDetailModel
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
        name: 'ibz_reportlyname',
        prop: 'ibzreportlyname',
        dataType: 'TEXT',
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
        name: 'reportto',
        prop: 'reportto',
        dataType: 'SSCODELIST',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'ibz_reportlyid',
        prop: 'ibzreportlyid',
        dataType: 'ACID',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'SSCODELIST',
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