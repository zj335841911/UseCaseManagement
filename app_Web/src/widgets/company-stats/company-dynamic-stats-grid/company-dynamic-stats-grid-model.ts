/**
 * CompanyDynamicStats 部件模型
 *
 * @export
 * @class CompanyDynamicStatsModel
 */
export default class CompanyDynamicStatsModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof CompanyDynamicStatsGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof CompanyDynamicStatsGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'ztdate',
          prop: 'ztdate',
          dataType: 'DATE',
        },
        {
          name: 'logincnt',
          prop: 'logincnt',
          dataType: 'INT',
        },
        {
          name: 'loghours',
          prop: 'loghours',
          dataType: 'INT',
        },
        {
          name: 'openedstorycnt',
          prop: 'openedstorycnt',
          dataType: 'INT',
        },
        {
          name: 'closedstorycnt',
          prop: 'closedstorycnt',
          dataType: 'INT',
        },
        {
          name: 'openedtaskcnt',
          prop: 'openedtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'finishedtaskcnt',
          prop: 'finishedtaskcnt',
          dataType: 'INT',
        },
        {
          name: 'openedbugcnt',
          prop: 'openedbugcnt',
          dataType: 'INT',
        },
        {
          name: 'resolvedbugcnt',
          prop: 'resolvedbugcnt',
          dataType: 'INT',
        },
        {
          name: 'dynamiccnt',
          prop: 'dynamiccnt',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'comment',
          dataType: 'LONGTEXT',
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
          name: 'companystats',
          prop: 'id',
        },
      {
        name: 'begin',
        prop: 'begin',
      },
      {
        name: 'end',
        prop: 'end',
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