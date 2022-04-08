/**
 * DashboardInfo 部件模型
 *
 * @export
 * @class DashboardInfoModel
 */
export default class DashboardInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardInfoModel
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
        prop: 'name',
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'code',
        prop: 'code',
        dataType: 'TEXT',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'po',
        prop: 'po',
        dataType: 'TEXT',
      },
      {
        name: 'rd',
        prop: 'rd',
        dataType: 'TEXT',
      },
      {
        name: 'qd',
        prop: 'qd',
        dataType: 'TEXT',
      },
      {
        name: 'linename',
        prop: 'linename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'createdby',
        prop: 'createdby',
        dataType: 'TEXT',
      },
      {
        name: 'createddate',
        prop: 'createddate',
        dataType: 'DATETIME',
      },
      {
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'activestorycnt',
        prop: 'activestorycnt',
        dataType: 'INT',
      },
      {
        name: 'productplancnt',
        prop: 'productplancnt',
        dataType: 'INT',
      },
      {
        name: 'relatedbugcnt',
        prop: 'relatedbugcnt',
        dataType: 'INT',
      },
      {
        name: 'changedstorycnt',
        prop: 'changedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'relatedprojects',
        prop: 'relatedprojects',
        dataType: 'INT',
      },
      {
        name: 'casecnt',
        prop: 'casecnt',
        dataType: 'INT',
      },
      {
        name: 'draftstorycnt',
        prop: 'draftstorycnt',
        dataType: 'INT',
      },
      {
        name: 'buildcnt',
        prop: 'buildcnt',
        dataType: 'INT',
      },
      {
        name: 'doccnt',
        prop: 'doccnt',
        dataType: 'INT',
      },
      {
        name: 'closedstorycnt',
        prop: 'closedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'releasecnt',
        prop: 'releasecnt',
        dataType: 'INT',
      },
      {
        name: 'product',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}