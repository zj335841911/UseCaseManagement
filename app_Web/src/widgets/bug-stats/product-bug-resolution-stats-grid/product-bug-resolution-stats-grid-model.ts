/**
 * ProductBugResolutionStats 部件模型
 *
 * @export
 * @class ProductBugResolutionStatsModel
 */
export default class ProductBugResolutionStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProductBugResolutionStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductBugResolutionStatsGridMode
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
          name: 'bugwjj',
          prop: 'bugwjj',
          dataType: 'INT',
        },
        {
          name: 'bugbydesign',
          prop: 'bugbydesign',
          dataType: 'INT',
        },
        {
          name: 'bugduplicate',
          prop: 'bugduplicate',
          dataType: 'INT',
        },
        {
          name: 'bugexternal',
          prop: 'bugexternal',
          dataType: 'INT',
        },
        {
          name: 'bugfixed',
          prop: 'bugfixed',
          dataType: 'INT',
        },
        {
          name: 'bugnotrepro',
          prop: 'bugnotrepro',
          dataType: 'INT',
        },
        {
          name: 'bugpostponed',
          prop: 'bugpostponed',
          dataType: 'INT',
        },
        {
          name: 'bugwillnotfix',
          prop: 'bugwillnotfix',
          dataType: 'INT',
        },
        {
          name: 'bugtostory',
          prop: 'bugtostory',
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