/**
 * BugKanBan 部件模型
 *
 * @export
 * @class BugKanBanModel
 */
export default class BugKanBanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugKanBanKanbanMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'closedby',
				prop: 'closedby',
				dataType: 'SSCODELIST',
			},
			{
				name: 'tostory',
				prop: 'tostory',
				dataType: 'PICKUP',
			},
			{
				name: 'closeddate',
				prop: 'closeddate',
				dataType: 'DATETIME',
			},
			{
				name: 'resolution',
				prop: 'resolution',
				dataType: 'SSCODELIST',
			},
			{
				name: 'srfmstag',
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
				name: 'duplicatebug',
				prop: 'duplicatebug',
				dataType: 'PICKUP',
			},
			{
				name: 'id',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'assignedto',
				prop: 'assignedto',
				dataType: 'TEXT',
			},
			{
				name: 'title',
				prop: 'title',
				dataType: 'TEXT',
			},
			{
				name: 'confirmed',
				prop: 'confirmed',
				dataType: 'NSCODELIST',
			},
			{
				name: 'repo',
				prop: 'repo',
				dataType: 'PICKUP',
			},
			{
				name: 'isfavorites',
				prop: 'isfavorites',
				dataType: 'TEXT',
			},
			{
				name: 'totask',
				prop: 'totask',
				dataType: 'PICKUP',
			},
			{
				name: 'delayresolve',
				prop: 'delayresolve',
				dataType: 'TEXT',
			},
			{
				name: 'module',
				prop: 'module',
				dataType: 'PICKUP',
			},
			{
				name: 'status',
				prop: 'status',
				dataType: 'SSCODELIST',
			},
			{
				name: 'task',
				prop: 'task',
				dataType: 'PICKUP',
			},
			{
				name: 'testtask',
				prop: 'testtask',
				dataType: 'PICKUP',
			},
			{
				name: 'severity',
			},
			{
				name: 'product',
				prop: 'product',
				dataType: 'PICKUP',
			},
			{
				name: 'project',
				prop: 'project',
				dataType: 'PICKUP',
			},
			{
				name: 'pri',
				prop: 'pri',
				dataType: 'NSCODELIST',
			},
			{
				name: 'plan',
				prop: 'plan',
				dataType: 'PICKUP',
			},
			{
				name: 'resolveddate',
				prop: 'resolveddate',
				dataType: 'DATETIME',
			},
			{
				name: 'resolvedby',
				prop: 'resolvedby',
				dataType: 'SSCODELIST',
			},
			{
				name: 'entry',
				prop: 'entry',
				dataType: 'PICKUP',
			},
			{
				name: 'branch',
				prop: 'branch',
				dataType: 'PICKUP',
			},
			{
				name: 'case',
				prop: 'ibizcase',
				dataType: 'PICKUP',
			},
			{
				name: 'delay',
				prop: 'delay',
				dataType: 'TEXT',
			},
			{
				name: 'deadline',
				prop: 'deadline',
				dataType: 'DATE',
			},

			{
				name: 'bug',
				prop: 'id',
				dataType: 'FONTKEY',
			},


      {
        name:'size',
        prop:'size'
      },
      {
        name:'query',
        prop:'query'
      },
      {
        name:'sort',
        prop:'sort'
      },
      {
        name:'page',
        prop:'page'
      },
      {
        name:'srfparentdata',
        prop:'srfparentdata'
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
		]
	}

}