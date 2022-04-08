/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'SSCODELIST',
        },
        {
          name: 'projectname',
          prop: 'projectname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'taskcnt',
          prop: 'taskcnt',
          dataType: 'INT',
        },
        {
          name: 'left',
          prop: 'left',
          dataType: 'INT',
        },
        {
          name: 'totaltaskcnt',
          prop: 'totaltaskcnt',
          dataType: 'INT',
        },
        {
          name: 'totalleft',
          prop: 'totalleft',
          dataType: 'INT',
        },
        {
          name: 'workload',
          prop: 'workload',
          dataType: 'TEXT',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
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
          name: 'employeeload',
          prop: 'id',
        },
      {
        name: 'dept',
        prop: 'dept',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
      },
      {
        name: 'workday',
        prop: 'workday',
        dataType: 'INT',
      },
      {
        name: 'everydaytime',
        prop: 'everydaytime',
      },
      {
        name: 'assign',
        prop: 'assign',
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