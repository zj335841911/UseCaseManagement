/**
 * BurnDown2 部件模型
 *
 * @export
 * @class BurnDown2Model
 */
export default class BurnDown2Model {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BurnDown2ChartMode
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