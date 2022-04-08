/**
 * ProjectStoryStageStats 部件模型
 *
 * @export
 * @class ProjectStoryStageStatsModel
 */
export default class ProjectStoryStageStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectStoryStageStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectStoryStageStatsGridMode
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
          name: 'emptystagestorycnt',
          prop: 'emptystagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'waitstagestorycnt',
          prop: 'waitstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'plannedstagestorycnt',
          prop: 'plannedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'projectedstagestorycnt',
          prop: 'projectedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'developingstagestorycnt',
          prop: 'developingstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'developedstagestorycnt',
          prop: 'developedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'testingstagestorycnt',
          prop: 'testingstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'testedstagestorycnt',
          prop: 'testedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'verifiedstagestorycnt',
          prop: 'verifiedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'releasedstagestorycnt',
          prop: 'releasedstagestorycnt',
          dataType: 'INT',
        },
        {
          name: 'closedstagestorycnt',
          prop: 'closedstagestorycnt',
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