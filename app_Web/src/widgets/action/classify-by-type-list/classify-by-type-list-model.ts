/**
 * ClassifyByType 部件模型
 *
 * @export
 * @class ClassifyByTypeModel
 */
export default class ClassifyByTypeModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ClassifyByTypeListMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'product',
			},
			{
				name: 'date',
			},
			{
				name: 'comment',
			},
			{
				name: 'actiontype',
				prop: 'action',
				dataType: 'SSCODELIST',
			},
			{
				name: 'id',
			},
			{
				name: 'objecttype',
			},
			{
				name: 'extra',
			},
			{
				name: 'actionmanner',
        codelist:{tag:'ActionManner',codelistType:'STATIC'},
			},
			{
				name: 'objectid',
			},
			{
				name: 'isactorss',
			},
			{
				name: 'actor',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
			},
			{
				name: 'project',
			},
			{
				name: 'srfkey',
				prop: 'id',
				dataType: 'ACID',
			},
			{
				name: 'srfmajortext',
				prop: 'comment',
				dataType: 'LONGTEXT',
			},
			{
				name: 'action',
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