/**
 * ProductTeam 部件模型
 *
 * @export
 * @class ProductTeamModel
 */
export default class ProductTeamModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductTeamListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'id',
			},
			{
				name: 'account',
        codelist:{tag:'UserRealName_Gird',codelistType:'DYNAMIC'},
			},
			{
				name: 'join',
			},
			{
				name: 'role',
			},
			{
				name: 'estimate',
			},
			{
				name: 'total',
			},
			{
				name: 'type',
        codelist:{tag:'Team__type',codelistType:'STATIC'},
			},
			{
				name: 'consumed',
			},
			{
				name: 'hours',
			},
			{
				name: 'days',
			},
			{
				name: 'left',
			},
			{
				name: 'root',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'account',
				dataType: 'TEXT',
			},
			{
				name: 'productteam',
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