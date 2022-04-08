/**
 * IndexType 部件模型
 *
 * @export
 * @class IndexTypeModel
 */
export default class IndexTypeModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof IndexTypeDataViewMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'srfmajortext',
				prop: 'indexname',
				dataType: 'TEXT',
			},
			{
				name: 'srfkey',
				prop: 'indexid',
				dataType: 'BIGINT',
			},

			{
				name: 'ibizproindex',
				prop: 'indexid',
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