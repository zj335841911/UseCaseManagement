/**
 * ProjectProgress 部件模型
 *
 * @export
 * @class ProjectProgressModel
 */
export default class ProjectProgressModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProjectProgressGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProjectProgressGridMode
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
          name: 'storycnt',
          prop: 'storycnt',
          dataType: 'INT',
        },
        {
          name: 'leftstorycnt',
          prop: 'leftstorycnt',
          dataType: 'INT',
        },
        {
          name: 'taskcnt',
          prop: 'taskcnt',
          dataType: 'INT',
        },
        {
          name: 'undonetaskcnt',
          prop: 'undonetaskcnt',
          dataType: 'INT',
        },
        {
          name: 'totalleft',
          prop: 'totalleft',
          dataType: 'FLOAT',
        },
        {
          name: 'totalconsumed',
          prop: 'totalconsumed',
          dataType: 'FLOAT',
        },
        {
          name: 'progress',
          prop: 'progress',
          dataType: 'TEXT',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'TEXT',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
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