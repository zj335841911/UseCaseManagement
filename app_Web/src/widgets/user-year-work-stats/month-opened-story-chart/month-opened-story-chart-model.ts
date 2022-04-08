/**
 * MonthOpenedStory 部件模型
 *
 * @export
 * @class MonthOpenedStoryModel
 */
export default class MonthOpenedStoryModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MonthOpenedStoryDashboard_sysportlet5_chartMode
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