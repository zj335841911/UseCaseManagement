/**
 * BugSeverity_Project 部件模型
 *
 * @export
 * @class BugSeverity_ProjectModel
 */
export default class BugSeverity_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugSeverity_ProjectDashboard_BugSeverity_chartMode
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