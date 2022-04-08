/**
 * ProjectInputStats 部件模型
 *
 * @export
 * @class ProjectInputStatsModel
 */
export default class ProjectInputStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectInputStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectInputStatsGridMode
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
          name: 'timescale',
          prop: 'timescale',
          dataType: 'TEXT',
        },
        {
          name: 'taskcnt',
          prop: 'taskcnt',
          dataType: 'INT',
        },
        {
          name: 'storycnt',
          prop: 'storycnt',
          dataType: 'INT',
        },
        {
          name: 'membercnt',
          prop: 'membercnt',
          dataType: 'INT',
        },
        {
          name: 'projecttotalconsumed',
          prop: 'projecttotalconsumed',
          dataType: 'FLOAT',
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