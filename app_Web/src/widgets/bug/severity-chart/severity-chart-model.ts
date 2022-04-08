/**
 * Severity 部件模型
 *
 * @export
 * @class SeverityModel
 */
export default class SeverityModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof SeverityDashboard_sysportlet9_chartMode
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