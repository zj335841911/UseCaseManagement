/**
 * MainL 部件模型
 *
 * @export
 * @class MainLModel
 */
export default class MainLModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainLModel
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
        prop: 'sysupdatelogid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'sysupdatelogname',
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
        dataType: 'TEXT',
      },
      {
        name: 'update',
        prop: 'update',
        dataType: 'DATE',
      },
      {
        name: 'updatebranch',
        prop: 'updatebranch',
        dataType: 'SSCODELIST',
      },
      {
        name: 'latestupdate',
        prop: 'latestupdate',
        dataType: 'YESNO',
      },
      {
        name: 'updesc',
        prop: 'updesc',
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
        name: 'sys_update_logid',
        prop: 'sysupdatelogid',
        dataType: 'GUID',
      },
      {
        name: 'sysupdatelog',
        prop: 'sysupdatelogid',
        dataType: 'FONTKEY',
      },
    ]
  }

}