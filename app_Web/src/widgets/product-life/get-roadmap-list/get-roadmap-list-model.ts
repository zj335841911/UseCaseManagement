/**
 * GetRoadmap 部件模型
 *
 * @export
 * @class GetRoadmapModel
 */
export default class GetRoadmapModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof GetRoadmapList2Mode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'year',
			},
			{
				name: 'parent',
			},
			{
				name: 'type',
			},
			{
				name: 'marker',
        codelist:{tag:'YesNo3',codelistType:'STATIC'},
			},
			{
				name: 'begin',
			},
			{
				name: 'productlifeid',
			},
			{
				name: 'branch',
			},
			{
				name: 'product',
			},
			{
				name: 'end',
			},
			{
				name: 'productlifename',
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