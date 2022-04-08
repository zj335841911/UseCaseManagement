/**
 * CaseLASTRUNNER 部件模型
 *
 * @export
 * @class CaseLASTRUNNERModel
 */
export default class CaseLASTRUNNERModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CaseLASTRUNNERDashboard_sysportlet4_chartMode
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