/**
 * BugRESOLVEDBY 部件模型
 *
 * @export
 * @class BugRESOLVEDBYModel
 */
export default class BugRESOLVEDBYModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugRESOLVEDBYDashboard_sysportlet15_chartMode
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