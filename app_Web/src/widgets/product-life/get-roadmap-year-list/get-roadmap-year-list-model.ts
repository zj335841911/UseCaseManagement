/**
 * GetRoadmapYear 部件模型
 *
 * @export
 * @class GetRoadmapYearModel
 */
export default class GetRoadmapYearModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapYearListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'productlifeid',
			},
			{
				name: 'parent',
			},
			{
				name: 'type',
			},
			{
				name: 'end',
			},
			{
				name: 'begin',
			},
			{
				name: 'productlifename',
			},
			{
				name: 'marker',
        codelist:{tag:'YesNo3',codelistType:'STATIC'},
			},
			{
				name: 'product',
			},
			{
				name: 'branch',
			},
			{
				name: 'year',
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