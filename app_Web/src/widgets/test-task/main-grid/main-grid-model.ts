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
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'projecttname',
          prop: 'projecttname',
          dataType: 'PICKUPTEXT',
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
          name: 'build',
          prop: 'build',
          dataType: 'PICKUP',
        },
        {
          name: 'buildname',
          prop: 'buildname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'owner',
          prop: 'owner',
          dataType: 'TEXT',
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
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
      ]
    }else{
		  return [
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'projecttname',
          prop: 'projecttname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'buildname',
          prop: 'buildname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'owner',
          prop: 'owner',
          dataType: 'TEXT',
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
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'build',
          prop: 'build',
          dataType: 'PICKUP',
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
          name: 'testtask',
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