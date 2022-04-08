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
        name: 'tasks',
        prop: 'tasks',
        dataType: 'TEXT',
      },
      {
        name: 'objectid',
        prop: 'objectid',
        dataType: 'INT',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'owner',
        prop: 'owner',
        dataType: 'TEXT',
      },
      {
        name: 'members',
        prop: 'members',
        dataType: 'LONGTEXT',
      },
      {
        name: 'objecttype',
        prop: 'objecttype',
        dataType: 'SSCODELIST',
      },
      {
        name: 'builds',
        prop: 'builds',
        dataType: 'TEXT',
      },
      {
        name: 'bugs',
        prop: 'bugs',
        dataType: 'LONGTEXT',
      },
      {
        name: 'stories',
        prop: 'stories',
        dataType: 'LONGTEXT',
      },
      {
        name: 'cases',
        prop: 'cases',
        dataType: 'LONGTEXT',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'projectname',
        prop: 'projectname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'overviews',
        prop: 'overviews',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'testreport',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}