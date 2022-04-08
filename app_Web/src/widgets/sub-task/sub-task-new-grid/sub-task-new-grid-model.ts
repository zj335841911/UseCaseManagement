/**
 * SubTaskNew 部件模型
 *
 * @export
 * @class SubTaskNewModel
 */
export default class SubTaskNewModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof SubTaskNewGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof SubTaskNewGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'modulename',
          prop: 'modulename',
          dataType: 'PICKUPTEXT',
          isEditable:true
        },
        {
          name: 'storyname',
          prop: 'storyname',
          dataType: 'PICKUPTEXT',
          isEditable:true
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
          isEditable:true
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'eststarted',
          prop: 'eststarted',
          dataType: 'DATE',
          isEditable:true
        },
        {
          name: 'deadline',
          prop: 'deadline',
          dataType: 'DATE',
          isEditable:true
        },
        {
          name: 'desc',
          prop: 'desc',
          dataType: 'LONGTEXT',
          isEditable:true
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
          isEditable:true
        },
        {
          name: 'tasktype',
          prop: 'tasktype',
          dataType: 'SSCODELIST',
        },
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'isleaf',
          prop: 'isleaf',
          dataType: 'TEXT',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'srfmstag',
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
          name: 'assignedto_text',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'plan',
          prop: 'plan',
          dataType: 'PICKUP',
        },
        {
          name: 'allmodules',
          prop: 'allmodules',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'left',
          prop: 'left',
          dataType: 'FLOAT',
          isEditable:true
        },
        {
          name: 'subtask',
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