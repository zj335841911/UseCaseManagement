/**
 * CurOpenedCase 部件模型
 *
 * @export
 * @class CurOpenedCaseModel
 */
export default class CurOpenedCaseModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CurOpenedCaseDashboard_sysportlet5_chartMode
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