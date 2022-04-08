/**
 * MainMsg 部件模型
 *
 * @export
 * @class MainMsgModel
 */
export default class MainMsgModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainMsgModel
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
        name: 'ibz_monthlyid',
        prop: 'ibzmonthlyid',
        dataType: 'ACID',
      },
      {
        name: 'ibzmonthly',
        prop: 'ibzmonthlyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}