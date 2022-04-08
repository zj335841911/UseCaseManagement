/**
 * BugType_Project 部件模型
 *
 * @export
 * @class BugType_ProjectModel
 */
export default class BugType_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugType_ProjectDashboard_BugTypeProject_chartMode
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