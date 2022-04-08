/**
 * New 部件模型
 *
 * @export
 * @class NewModel
 */
export default class NewModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof NewModel
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
        prop: 'ibzmonthlyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzmonthlyname',
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
        name: 'ibz_monthlyname',
        prop: 'ibzmonthlyname',
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
        name: 'thismonthtask',
        prop: 'thismonthtask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'workthismonth',
        prop: 'workthismonth',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'nextmonthplanstask',
        prop: 'nextmonthplanstask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'plansnextmonth',
        prop: 'plansnextmonth',
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
        name: 'ibz_monthlyid',
        prop: 'ibzmonthlyid',
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
        name: 'ibzmonthly',
        prop: 'ibzmonthlyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}