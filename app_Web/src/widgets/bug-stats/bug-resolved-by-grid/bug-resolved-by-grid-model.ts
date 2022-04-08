/**
 * BugResolvedBy 部件模型
 *
 * @export
 * @class BugResolvedByModel
 */
export default class BugResolvedByModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof BugResolvedByGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugResolvedByGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'resolvedby',
          prop: 'resolvedby',
          dataType: 'SSCODELIST',
        },
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'bugcnt',
          prop: 'bugcnt',
          dataType: 'INT',
        },
        {
          name: 'bugtotal',
          prop: 'bugtotal',
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
        name: 'n_product_eq',
        prop: 'n_product_eq',
        dataType: 'PICKUP',
      },
      {
        name: 'n_resolvedby_eq',
        prop: 'n_resolvedby_eq',
        dataType: 'SSCODELIST',
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