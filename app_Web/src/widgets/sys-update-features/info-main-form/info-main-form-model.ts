/**
 * InfoMain 部件模型
 *
 * @export
 * @class InfoMainModel
 */
export default class InfoMainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof InfoMainModel
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
        prop: 'sysupdatefeaturesid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'sysupdatefeaturesname',
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
        name: 'sys_update_logname',
        prop: 'sysupdatelogname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'upfeatures',
        prop: 'upfeatures',
        dataType: 'TEXT',
      },
      {
        name: 'displayorder',
        prop: 'displayorder',
        dataType: 'INT',
      },
      {
        name: 'featuresdesc',
        prop: 'featuresdesc',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'createman',
        prop: 'createman',
        dataType: 'TEXT',
      },
      {
        name: 'createdate',
        prop: 'createdate',
        dataType: 'DATETIME',
      },
      {
        name: 'updateman',
        prop: 'updateman',
        dataType: 'TEXT',
      },
      {
        name: 'updatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'sys_update_featuresid',
        prop: 'sysupdatefeaturesid',
        dataType: 'GUID',
      },
      {
        name: 'sys_update_logid',
        prop: 'sysupdatelogid',
        dataType: 'PICKUP',
      },
      {
        name: 'sysupdatefeatures',
        prop: 'sysupdatefeaturesid',
        dataType: 'FONTKEY',
      },
    ]
  }

}