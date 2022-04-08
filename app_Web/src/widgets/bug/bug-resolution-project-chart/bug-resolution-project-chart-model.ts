/**
 * BugResolution_Project 部件模型
 *
 * @export
 * @class BugResolution_ProjectModel
 */
export default class BugResolution_ProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugResolution_ProjectDashboard_BugResolutionProject_chartMode
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