/**
 * MainInfo 部件模型
 *
 * @export
 * @class MainInfoModel
 */
export default class MainInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainInfoModel
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
        prop: 'ibzdailyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzdailyname',
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
        name: 'ibz_dailyname',
        prop: 'ibzdailyname',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'worktoday',
        prop: 'worktoday',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'planstomorrow',
        prop: 'planstomorrow',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'comment',
        prop: 'comment',
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
        name: 'todaytask',
        prop: 'todaytask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'tomorrowplanstask',
        prop: 'tomorrowplanstask',
        dataType: 'SMCODELIST',
      },
      {
        name: 'ibz_dailyid',
        prop: 'ibzdailyid',
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
        name: 'ibzdaily',
        prop: 'ibzdailyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}