/**
 * CurUserOpenedBug 部件模型
 *
 * @export
 * @class CurUserOpenedBugModel
 */
export default class CurUserOpenedBugModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CurUserOpenedBugDashboard_sysportlet4_chartMode
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