/**
 * ProductCreateStory 部件模型
 *
 * @export
 * @class ProductCreateStoryModel
 */
export default class ProductCreateStoryModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductCreateStoryDashboard_sysportlet3_chartMode
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