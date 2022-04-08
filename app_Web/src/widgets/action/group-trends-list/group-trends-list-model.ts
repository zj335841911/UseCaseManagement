/**
 * GroupTrends 部件模型
 *
 * @export
 * @class GroupTrendsModel
 */
export default class GroupTrendsModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GroupTrendsListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'objecttype',
			},
			{
				name: 'date',
			},
			{
				name: 'project',
			},
			{
				name: 'action',
			},
			{
				name: 'srfkey',
			},
			{
				name: 'product',
			},
			{
				name: 'objectid',
			},
			{
				name: 'actionmanner',
        codelist:{tag:'ActionManner',codelistType:'STATIC'},
			},
			{
				name: 'actor',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
			},
			{
				name: 'id',
			},
			{
				name: 'read',
        codelist:{tag:'Action__read',codelistType:'STATIC'},
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