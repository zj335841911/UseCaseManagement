/**
 * MainGrid_SuitSub 部件模型
 *
 * @export
 * @class MainGrid_SuitSubModel
 */
export default class MainGrid_SuitSubModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainGrid_SuitSubGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainGrid_SuitSubGridMode
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
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'openedby',
          prop: 'openedby',
          dataType: 'TEXT',
        },
        {
          name: 'lastrunner',
          prop: 'lastrunner',
          dataType: 'TEXT',
        },
        {
          name: 'lastrundate',
          prop: 'lastrundate',
          dataType: 'DATETIME',
        },
        {
          name: 'lastrunresult',
          prop: 'lastrunresult',
          dataType: 'SSCODELIST',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'status1',
          prop: 'status1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'tobugcnt',
          prop: 'tobugcnt',
          dataType: 'INT',
        },
        {
          name: 'resultcnt',
          prop: 'resultcnt',
          dataType: 'INT',
        },
        {
          name: 'casesteps',
          prop: 'casesteps',
          dataType: 'ONE2MANYDATA',
        },
        {
          name: 'lastrunresult1',
          prop: 'lastrunresult1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'isfavorites',
          prop: 'isfavorites',
          dataType: 'TEXT',
        },
        {
          name: 'color',
          prop: 'color',
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
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'lastrunresult',
          prop: 'lastrunresult',
          dataType: 'SSCODELIST',
        },
        {
          name: 'status1',
          prop: 'status1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'tobugcnt',
          prop: 'tobugcnt',
          dataType: 'INT',
        },
        {
          name: 'resultcnt',
          prop: 'resultcnt',
          dataType: 'INT',
        },
        {
          name: 'casesteps',
          prop: 'casesteps',
          dataType: 'ONE2MANYDATA',
        },
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'status',
          prop: 'status',
          dataType: 'SSCODELIST',
        },
        {
          name: 'srfmstag',
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
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
        },
        {
          name: 'lib',
          prop: 'lib',
          dataType: 'PICKUP',
        },
        {
          name: 'lastrunresult1',
          prop: 'lastrunresult1',
          dataType: 'SSCODELIST',
        },
        {
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'fromcaseid',
          prop: 'fromcaseid',
          dataType: 'PICKUP',
        },
        {
          name: 'isfavorites',
          prop: 'isfavorites',
          dataType: 'TEXT',
        },
        {
          name: 'case',
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