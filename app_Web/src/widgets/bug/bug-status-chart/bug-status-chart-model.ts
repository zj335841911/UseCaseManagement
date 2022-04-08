/**
 * BugSTATUS 部件模型
 *
 * @export
 * @class BugSTATUSModel
 */
export default class BugSTATUSModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugSTATUSDashboard_sysportlet11_chartMode
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