/**
 * MyOpenedStory_Stage 部件模型
 *
 * @export
 * @class MyOpenedStory_StageModel
 */
export default class MyOpenedStory_StageModel {

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyOpenedStory_StageDashboard_sysportlet7_chartMode
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