/**
 * TaskKanBan 部件模型
 *
 * @export
 * @class TaskKanBanModel
 */
export default class TaskKanBanModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TaskKanBanKanbanMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'tasktype',
				prop: 'tasktype',
				dataType: 'SSCODELIST',
			},
			{
				name: 'desc',
				prop: 'desc',
				dataType: 'LONGTEXT',
			},
			{
				name: 'frombug',
				prop: 'frombug',
				dataType: 'PICKUP',
			},
			{
				name: 'status1',
				prop: 'status1',
				dataType: 'SSCODELIST',
			},
			{
				name: 'type',
				prop: 'type',
				dataType: 'SSCODELIST',
			},
			{
				name: 'srfmstag',
			},
			{
				name: 'estimate',
				prop: 'estimate',
				dataType: 'FLOAT',
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
				name: 'id',
			},
			{
				name: 'assignedto',
				prop: 'assignedto',
				dataType: 'TEXT',
			},
			{
				name: 'story',
				prop: 'story',
				dataType: 'PICKUP',
			},
			{
				name: 'consumed',
				prop: 'consumed',
				dataType: 'FLOAT',
			},
			{
				name: 'name',
				prop: 'name',
				dataType: 'TEXT',
			},
			{
				name: 'eststarted',
				prop: 'eststarted',
				dataType: 'DATE',
			},
			{
				name: 'left',
			},
			{
				name: 'isfavorites',
				prop: 'isfavorites',
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
				name: 'parent',
				prop: 'parent',
				dataType: 'PICKUP',
			},
			{
				name: 'mailto',
				prop: 'mailto',
				dataType: 'SMCODELIST',
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
				name: 'color',
				prop: 'color',
				dataType: 'SSCODELIST',
			},
			{
				name: 'delay',
			},
			{
				name: 'deadline',
				prop: 'deadline',
				dataType: 'DATE',
			},

			{
				name: 'task',
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