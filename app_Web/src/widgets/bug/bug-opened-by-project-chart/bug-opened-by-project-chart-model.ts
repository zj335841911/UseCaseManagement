/**
 * BugOpenedBy_Project 部件模型
 *
 * @export
 * @class BugOpenedBy_ProjectModel
 */
export default class BugOpenedBy_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugOpenedBy_ProjectDashboard_sysportlet13_chartMode
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