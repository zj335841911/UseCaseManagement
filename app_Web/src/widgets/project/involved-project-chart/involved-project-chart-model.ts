/**
 * InvolvedProject 部件模型
 *
 * @export
 * @class InvolvedProjectModel
 */
export default class InvolvedProjectModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof InvolvedProjectDashboard_sysportlet6_chartMode
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