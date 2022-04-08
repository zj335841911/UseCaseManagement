/**
 * ProjectBugStatusCount 部件模型
 *
 * @export
 * @class ProjectBugStatusCountModel
 */
export default class ProjectBugStatusCountModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectBugStatusCountGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectBugStatusCountGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'projectname',
          prop: 'projectname',
          dataType: 'TEXT',
        },
        {
          name: 'bugactive',
          prop: 'bugactive',
          dataType: 'INT',
        },
        {
          name: 'bugresolved',
          prop: 'bugresolved',
          dataType: 'INT',
        },
        {
          name: 'bugclosed',
          prop: 'bugclosed',
          dataType: 'INT',
        },
        {
          name: 'bugcnt',
          prop: 'bugcnt',
          dataType: 'INT',
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'title',
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
          name: 'bugstats',
          prop: 'id',
        },
      {
        name: 'openeddatelt',
        prop: 'openeddatelt',
      },
      {
        name: 'openeddategt',
        prop: 'openeddategt',
      },
      {
        name: 'producteq',
        prop: 'producteq',
      },
      {
        name: 'projecteq',
        prop: 'projecteq',
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