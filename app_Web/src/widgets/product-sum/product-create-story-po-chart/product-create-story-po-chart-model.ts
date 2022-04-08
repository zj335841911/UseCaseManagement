/**
 * ProductCreateStory_PO 部件模型
 *
 * @export
 * @class ProductCreateStory_POModel
 */
export default class ProductCreateStory_POModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductCreateStory_POChartMode
	 */
	public getDataItems(): any[] {
		return [
			{
			name:'size',
			prop:'size'
			},
			{
			name:'query',
			prop:'query'
			},
			{
			name:'page',
			prop:'page'
			},
			{
			name:'sort',
			prop:'sort'
			}
		]
	}

}