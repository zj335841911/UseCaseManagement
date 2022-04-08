/**
 * ProjectPlan 部件模型
 *
 * @export
 * @class ProjectPlanModel
 */
export default class ProjectPlanModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ProjectPlanModel
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
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'BIGINT',
      },
      {
        name: 'plan',
        prop: 'plan',
        dataType: 'LONGTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}