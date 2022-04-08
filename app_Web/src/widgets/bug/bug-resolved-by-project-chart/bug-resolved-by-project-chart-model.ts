/**
 * BugResolvedBy_Project 部件模型
 *
 * @export
 * @class BugResolvedBy_ProjectModel
 */
export default class BugResolvedBy_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugResolvedBy_ProjectDashboard_sysportlet15_chartMode
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