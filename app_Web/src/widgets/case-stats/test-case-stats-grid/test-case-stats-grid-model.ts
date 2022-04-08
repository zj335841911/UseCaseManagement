/**
 * TestCaseStats 部件模型
 *
 * @export
 * @class TestCaseStatsModel
 */
export default class TestCaseStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof TestCaseStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TestCaseStatsGridMode
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
        },
        {
          name: 'totalcase',
          prop: 'totalcase',
          dataType: 'INT',
        },
        {
          name: 'passcase',
          prop: 'passcase',
          dataType: 'INT',
        },
        {
          name: 'failcase',
          prop: 'failcase',
          dataType: 'INT',
        },
        {
          name: 'blockedcase',
          prop: 'blockedcase',
          dataType: 'INT',
        },
        {
          name: 'totalruncase',
          prop: 'totalruncase',
          dataType: 'INT',
        },
        {
          name: 'passrate',
          prop: 'passrate',
          dataType: 'TEXT',
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'module',
          prop: 'module',
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
          name: 'casestats',
          prop: 'id',
        },
      {
        name: 'product',
        prop: 'product',
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