/**
 * DEFAULT 部件模型
 *
 * @export
 * @class DEFAULTModel
 */
export default class DEFAULTModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof DEFAULTHistoryMode
	 */
	public getDataItems(): any[] {
		return [
			{
				name: 'field',
			},
			{
				name: 'ibiznew',
			},
			{
				name: 'id',
			},
			{
				name: 'old',
			},
			{
				name: 'diff',
			},
			{
				name: 'action',
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