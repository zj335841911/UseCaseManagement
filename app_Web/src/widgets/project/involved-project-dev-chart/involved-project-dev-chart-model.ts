/**
 * InvolvedProject_dev 部件模型
 *
 * @export
 * @class InvolvedProject_devModel
 */
export default class InvolvedProject_devModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof InvolvedProject_devChartMode
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