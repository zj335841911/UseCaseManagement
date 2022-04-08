/**
 * ProjectTaskStatusCount 部件模型
 *
 * @export
 * @class ProjectTaskStatusCountModel
 */
export default class ProjectTaskStatusCountModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskStatusCountGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskStatusCountGridMode
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
          name: 'doingtaskcnt',
          prop: 'doingtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'waittaskcnt',
          prop: 'waittaskcnt',
          dataType: 'INT',
        },
        {
          name: 'pausetaskcnt',
          prop: 'pausetaskcnt',
          dataType: 'INT',
        },
        {
          name: 'closedtaskcnt',
          prop: 'closedtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'canceltaskcnt',
          prop: 'canceltaskcnt',
          dataType: 'INT',
        },
        {
          name: 'donetaskcnt',
          prop: 'donetaskcnt',
          dataType: 'INT',
        },
        {
          name: 'taskcnt',
          prop: 'taskcnt',
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