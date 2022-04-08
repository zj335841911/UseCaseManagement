/**
 * DashboardMainEdit 部件模型
 *
 * @export
 * @class DashboardMainEditModel
 */
export default class DashboardMainEditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DashboardMainEditModel
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'steps',
        prop: 'steps',
        dataType: 'LONGTEXT',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'color',
        prop: 'color',
        dataType: 'SSCODELIST',
      },
      {
        name: 'files',
        prop: 'files',
        dataType: 'TEXT',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'branch',
        prop: 'branch',
        dataType: 'PICKUP',
      },
      {
        name: 'branchname',
        prop: 'branchname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUP',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'plan',
        prop: 'plan',
        dataType: 'PICKUP',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'severity',
        prop: 'severity',
        dataType: 'NSCODELIST',
      },
      {
        name: 'storyversion',
        prop: 'storyversion',
        dataType: 'INT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'activatedcount',
        prop: 'activatedcount',
        dataType: 'INT',
      },
      {
        name: 'activateddate',
        prop: 'activateddate',
        dataType: 'DATE',
      },
      {
        name: 'confirmed',
        prop: 'confirmed',
        dataType: 'NSCODELIST',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'deadline',
        prop: 'deadline',
        dataType: 'DATE',
      },
      {
        name: 'os',
        prop: 'os',
        dataType: 'SSCODELIST',
      },
      {
        name: 'browser',
        prop: 'browser',
        dataType: 'SSCODELIST',
      },
      {
        name: 'keywords',
        prop: 'keywords',
        dataType: 'TEXT',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'mailtoconact',
        prop: 'mailtoconact',
        dataType: 'TEXT',
      },
      {
        name: 'mailtopk',
        prop: 'mailtopk',
        dataType: 'SMCODELIST',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'PICKUP',
      },
      {
        name: 'projectname',
        prop: 'projectname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'storyname',
        prop: 'storyname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'taskname',
        prop: 'taskname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'openedby',
        prop: 'openedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'openedbuild',
        prop: 'openedbuild',
        dataType: 'SMCODELIST',
      },
      {
        name: 'resolvedby',
        prop: 'resolvedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolution',
        prop: 'resolution',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolvedbuild',
        prop: 'resolvedbuild',
        dataType: 'SSCODELIST',
      },
      {
        name: 'closedby',
        prop: 'closedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'task',
        prop: 'task',
        dataType: 'PICKUP',
      },
      {
        name: 'bug',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}