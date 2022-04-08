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
        prop: 'ibzproconfigid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzproconfigname',
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
        name: 'ibzpro_configname',
        prop: 'ibzproconfigname',
        dataType: 'TEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'scope',
        prop: 'scope',
        dataType: 'SSCODELIST',
      },
      {
        name: 'managementstatus',
        prop: 'managementstatus',
        dataType: 'SSCODELIST',
      },
      {
        name: 'vaild',
        prop: 'vaild',
        dataType: 'SSCODELIST',
      },
      {
        name: 'memo',
        prop: 'memo',
        dataType: 'TEXT',
      },
      {
        name: 'ibzpro_configid',
        prop: 'ibzproconfigid',
        dataType: 'GUID',
      },
      {
        name: 'ibzproconfig',
        prop: 'ibzproconfigid',
        dataType: 'FONTKEY',
      },
    ]
  }

}