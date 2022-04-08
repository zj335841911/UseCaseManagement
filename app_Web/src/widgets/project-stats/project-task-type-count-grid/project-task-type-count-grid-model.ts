/**
 * ProjectTaskTypeCount 部件模型
 *
 * @export
 * @class ProjectTaskTypeCountModel
 */
export default class ProjectTaskTypeCountModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskTypeCountGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectTaskTypeCountGridMode
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
          name: 'designtaskcnt',
          prop: 'designtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'develtaskcnt',
          prop: 'develtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'testtaskcnt',
          prop: 'testtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'studytaskcnt',
          prop: 'studytaskcnt',
          dataType: 'INT',
        },
        {
          name: 'discusstaskcnt',
          prop: 'discusstaskcnt',
          dataType: 'INT',
        },
        {
          name: 'uitaskcnt',
          prop: 'uitaskcnt',
          dataType: 'INT',
        },
        {
          name: 'affairtaskcnt',
          prop: 'affairtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'servetaskcnt',
          prop: 'servetaskcnt',
          dataType: 'INT',
        },
        {
          name: 'misctaskcnt',
          prop: 'misctaskcnt',
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
        name: 'n_status_eq',
        prop: 'n_status_eq',
        dataType: 'TEXT',
      },
      {
        name: 'n_begin_gtandeq',
        prop: 'n_begin_gtandeq',
        dataType: 'DATE',
      },
      {
        name: 'n_end_ltandeq',
        prop: 'n_end_ltandeq',
        dataType: 'DATE',
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