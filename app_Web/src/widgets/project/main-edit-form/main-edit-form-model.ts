/**
 * Main_Edit 部件模型
 *
 * @export
 * @class Main_EditModel
 */
export default class Main_EditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof Main_EditModel
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
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'code',
        prop: 'code',
        dataType: 'TEXT',
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
        name: 'period',
        prop: 'period',
        dataType: 'SSCODELIST',
      },
      {
        name: 'days',
        prop: 'days',
        dataType: 'INT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'supproreport',
        prop: 'supproreport',
        dataType: 'SSCODELIST',
      },
      {
        name: 'team',
        prop: 'team',
        dataType: 'TEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'po',
        prop: 'po',
        dataType: 'SSCODELIST',
      },
      {
        name: 'pm',
        prop: 'pm',
        dataType: 'SSCODELIST',
      },
      {
        name: 'rd',
        prop: 'rd',
        dataType: 'SSCODELIST',
      },
      {
        name: 'qd',
        prop: 'qd',
        dataType: 'SSCODELIST',
      },
      {
        name: 'srfarray',
        prop: 'srfarray',
        dataType: 'TEXT',
      },
      {
        name: 'products',
        prop: 'products',
        dataType: 'TEXT',
      },
      {
        name: 'branchs',
        prop: 'branchs',
        dataType: 'TEXT',
      },
      {
        name: 'plans',
        prop: 'plans',
        dataType: 'TEXT',
      },
      {
        name: 'formitemex2',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'project',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}