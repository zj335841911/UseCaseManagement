/**
 * BugOpenedBy 部件模型
 *
 * @export
 * @class BugOpenedByModel
 */
export default class BugOpenedByModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugOpenedByDashboard_sysportlet13_chartMode
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