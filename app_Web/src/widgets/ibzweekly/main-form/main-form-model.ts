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
        prop: 'ibzweeklyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzweeklyname',
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
        name: 'ibz_weeklyname',
        prop: 'ibzweeklyname',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
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
        name: 'thisweektask',
        prop: 'thisweektask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'workthisweek',
        prop: 'workthisweek',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'nextweektask',
        prop: 'nextweektask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'plannextweek',
        prop: 'plannextweek',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'files',
        prop: 'files',
        dataType: 'TEXT',
      },
      {
        name: 'ibz_weeklyid',
        prop: 'ibzweeklyid',
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
        name: 'ibzweekly',
        prop: 'ibzweeklyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}