/**
 * NewPlan 部件模型
 *
 * @export
 * @class NewPlanModel
 */
export default class NewPlanModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof NewPlanModel
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
        name: 'team',
        prop: 'team',
        dataType: 'TEXT',
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