/**
 * MyWork 部件模型
 *
 * @export
 * @class MyWorkModel
 */
export default class MyWorkModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWorkListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'projects',
			},
			{
				name: 'myebugs',
			},
			{
				name: 'account',
			},
			{
				name: 'myetasks',
			},
			{
				name: 'mybugs',
			},
			{
				name: 'products',
			},
			{
				name: 'mystorys',
			},
			{
				name: 'mytasks',
			},
			{
				name: 'eprojects',
			},
			{
				name: 'realname',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'realname',
				dataType: 'TEXT',
			},
			{
				name: 'ibzmyterritory',
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
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
		]
	}

}