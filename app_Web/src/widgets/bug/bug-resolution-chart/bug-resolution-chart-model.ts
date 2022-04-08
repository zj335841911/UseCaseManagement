/**
 * BugRESOLUTION 部件模型
 *
 * @export
 * @class BugRESOLUTIONModel
 */
export default class BugRESOLUTIONModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugRESOLUTIONDashboard_sysportlet12_chartMode
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