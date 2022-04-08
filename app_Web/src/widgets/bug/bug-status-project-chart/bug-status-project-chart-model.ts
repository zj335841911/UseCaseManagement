/**
 * BugStatus_Project 部件模型
 *
 * @export
 * @class BugStatus_ProjectModel
 */
export default class BugStatus_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugStatus_ProjectDashboard_BugStatusProject_chartMode
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