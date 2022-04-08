/**
 * DashBoardInfo 部件模型
 *
 * @export
 * @class DashBoardInfoModel
 */
export default class DashBoardInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashBoardInfoModel
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
        name: 'formitem6',
        prop: 'totalwh',
        dataType: 'INT',
      },
      {
        name: 'formitem7',
        prop: 'totalconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'formitemex1',
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
        name: 'days',
        prop: 'days',
        dataType: 'INT',
      },
      {
        name: 'totalhours',
        prop: 'totalhours',
        dataType: 'DECIMAL',
      },
      {
        name: 'formitem',
        prop: 'totalestimate',
        dataType: 'FLOAT',
      },
      {
        name: 'formitem1',
        prop: 'totalconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'formitem2',
        prop: 'totalleft',
        dataType: 'FLOAT',
      },
      {
        name: 'formitem3',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'formitem4',
        prop: 'taskcnt',
        dataType: 'INT',
      },
      {
        name: 'formitem5',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}