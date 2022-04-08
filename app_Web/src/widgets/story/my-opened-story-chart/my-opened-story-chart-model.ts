/**
 * MyOpenedStory 部件模型
 *
 * @export
 * @class MyOpenedStoryModel
 */
export default class MyOpenedStoryModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyOpenedStoryDashboard_sysportlet6_chartMode
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