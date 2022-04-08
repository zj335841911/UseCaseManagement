/**
 * BugModule 部件模型
 *
 * @export
 * @class BugModuleModel
 */
export default class BugModuleModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugModuleDashboard_sysportlet14_chartMode
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