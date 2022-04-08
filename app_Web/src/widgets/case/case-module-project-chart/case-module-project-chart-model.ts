/**
 * CaseModuleProject 部件模型
 *
 * @export
 * @class CaseModuleProjectModel
 */
export default class CaseModuleProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CaseModuleProjectDashboard_sysportlet3_chartMode
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