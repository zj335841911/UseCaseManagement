/**
 * ProductBugStatusCount 部件模型
 *
 * @export
 * @class ProductBugStatusCountModel
 */
export default class ProductBugStatusCountModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProductBugStatusCountGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductBugStatusCountGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPTEXT',
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
          name: 'bugactive',
          prop: 'bugactive',
          dataType: 'INT',
        },
        {
          name: 'bugefficient',
          prop: 'bugefficient',
          dataType: 'TEXT',
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
        dataType: 'PICKUP',
      },
      {
        name: 'projecteq',
        prop: 'projecteq',
        dataType: 'PICKUP',
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