/**
 * ProjectStoryStatusStats 部件模型
 *
 * @export
 * @class ProjectStoryStatusStatsModel
 */
export default class ProjectStoryStatusStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectStoryStatusStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectStoryStatusStatsGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'emptystory',
          prop: 'emptystory',
          dataType: 'INT',
        },
        {
          name: 'draftstory',
          prop: 'draftstory',
          dataType: 'INT',
        },
        {
          name: 'activestory',
          prop: 'activestory',
          dataType: 'INT',
        },
        {
          name: 'closedstory',
          prop: 'closedstory',
          dataType: 'INT',
        },
        {
          name: 'changedstory',
          prop: 'changedstory',
          dataType: 'INT',
        },
        {
          name: 'storycnt',
          prop: 'storycnt',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'projectstats',
          prop: 'id',
        },
      {
        name: 'n_status_eq',
        prop: 'n_status_eq',
        dataType: 'TEXT',
      },

        {
          name:'size',
          prop:'size'
        },
        {
          name:'query',
          prop:'query'
        },
        {
          name:'filter',
          prop:'filter'
        },
        {
          name:'page',
          prop:'page'
        },
        {
          name:'sort',
          prop:'sort'
        },
        {
          name:'srfparentdata',
          prop:'srfparentdata'
        },
        // 前端新增修改标识，新增为"0",修改为"1"或未设值
        {
          name: 'srffrontuf',
          prop: 'srffrontuf',
          dataType: 'TEXT',
        },
      ]
    }
  }

}