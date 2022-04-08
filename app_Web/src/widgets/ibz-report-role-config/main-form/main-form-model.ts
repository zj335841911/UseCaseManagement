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
        prop: 'ibzreportroleconfigid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzreportroleconfigname',
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
        name: 'ibz_report_role_configname',
        prop: 'ibzreportroleconfigname',
        dataType: 'TEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'report_role',
        prop: 'report_role',
        dataType: 'SMCODELIST',
      },
      {
        name: 'ibz_report_role_configid',
        prop: 'ibzreportroleconfigid',
        dataType: 'GUID',
      },
      {
        name: 'ibzreportroleconfig',
        prop: 'ibzreportroleconfigid',
        dataType: 'FONTKEY',
      },
    ]
  }

}