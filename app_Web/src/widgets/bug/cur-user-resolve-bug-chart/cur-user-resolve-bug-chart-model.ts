/**
 * CurUserResolveBug 部件模型
 *
 * @export
 * @class CurUserResolveBugModel
 */
export default class CurUserResolveBugModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CurUserResolveBugDashboard_sysportlet4_chartMode
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