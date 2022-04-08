/**
 * DashboardBugLife 部件模型
 *
 * @export
 * @class DashboardBugLifeModel
 */
export default class DashboardBugLifeModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardBugLifeModel
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
        name: 'openedby',
        prop: 'openedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'openeddate',
        prop: 'openeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'openedbuild',
        prop: 'openedbuild',
        dataType: 'SMCODELIST',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'resolvedby',
        prop: 'resolvedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolveddate',
        prop: 'resolveddate',
        dataType: 'DATETIME',
      },
      {
        name: 'delayresolve',
        prop: 'delayresolve',
        dataType: 'TEXT',
      },
      {
        name: 'resolvedbuild',
        prop: 'resolvedbuild',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolution',
        prop: 'resolution',
        dataType: 'SSCODELIST',
      },
      {
        name: 'closedby',
        prop: 'closedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'closeddate',
        prop: 'closeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'lastediteddate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'linkbug',
        prop: 'linkbug',
        dataType: 'TEXT',
      },
      {
        name: 'case',
        prop: 'ibizcase',
        dataType: 'PICKUP',
      },
      {
        name: 'casename',
        prop: 'casename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'bug',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}