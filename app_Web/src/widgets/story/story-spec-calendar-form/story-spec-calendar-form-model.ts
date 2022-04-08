/**
 * StorySpecCalendar 部件模型
 *
 * @export
 * @class StorySpecCalendarModel
 */
export default class StorySpecCalendarModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof StorySpecCalendarModel
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
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'title',
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
        name: 'parent',
        prop: 'parent',
        dataType: 'PICKUP',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'stage',
        prop: 'stage',
        dataType: 'SSCODELIST',
      },
      {
        name: 'estimate',
        prop: 'estimate',
        dataType: 'FLOAT',
      },
      {
        name: 'isfavorites',
        prop: 'isfavorites',
        dataType: 'TEXT',
      },
      {
        name: 'ischild',
        prop: 'ischild',
        dataType: 'TEXT',
      },
      {
        name: 'formitem',
        prop: 'versionc',
        dataType: 'TEXT',
      },
      {
        name: 'spec',
        prop: 'spec',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'verify',
        prop: 'verify',
        dataType: 'LONGTEXT',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}