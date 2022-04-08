/**
 * ProjectStatusBar 部件模型
 *
 * @export
 * @class ProjectStatusBarModel
 */
export default class ProjectStatusBarModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectStatusBarDb_projectstatusportlet_chartMode
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