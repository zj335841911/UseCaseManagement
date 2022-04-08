/**
 * GetRoadmapS 部件模型
 *
 * @export
 * @class GetRoadmapSModel
 */
export default class GetRoadmapSModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapSList2Mode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'marker',
        codelist:{tag:'YesNo3',codelistType:'STATIC'},
			},
			{
				name: 'productlifeid',
			},
			{
				name: 'product',
			},
			{
				name: 'type',
			},
			{
				name: 'end',
			},
			{
				name: 'parent',
			},
			{
				name: 'year',
			},
			{
				name: 'branch',
			},
			{
				name: 'productlifename',
			},
			{
				name: 'begin',
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