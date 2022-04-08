/**
 * CaseModule 部件模型
 *
 * @export
 * @class CaseModuleModel
 */
export default class CaseModuleModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CaseModuleDashboard_sysportlet3_chartMode
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