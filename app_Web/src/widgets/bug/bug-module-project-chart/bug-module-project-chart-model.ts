/**
 * BugModule_Project 部件模型
 *
 * @export
 * @class BugModule_ProjectModel
 */
export default class BugModule_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugModule_ProjectDashboard_BugModuleProject_chartMode
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