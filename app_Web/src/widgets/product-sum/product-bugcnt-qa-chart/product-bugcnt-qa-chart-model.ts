/**
 * ProductBugcnt_QA 部件模型
 *
 * @export
 * @class ProductBugcnt_QAModel
 */
export default class ProductBugcnt_QAModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductBugcnt_QAChartMode
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