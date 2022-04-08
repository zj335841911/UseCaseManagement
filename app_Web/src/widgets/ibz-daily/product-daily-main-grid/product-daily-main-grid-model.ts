/**
 * ProductDailyMain 部件模型
 *
 * @export
 * @class ProductDailyMainModel
 */
export default class ProductDailyMainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProductDailyMainGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductDailyMainGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'ibz_dailyname',
          prop: 'ibzdailyname',
          dataType: 'TEXT',
        },
        {
          name: 'account',
          prop: 'account',
          dataType: 'SSCODELIST',
        },
        {
          name: 'date',
          prop: 'date',
          dataType: 'DATE',
        },
        {
          name: 'reportto',
          prop: 'reportto',
          dataType: 'SSCODELIST',
        },
        {
          name: 'issubmit',
          prop: 'issubmit',
          dataType: 'SSCODELIST',
        },
        {
          name: 'ibz_dailyid',
          prop: 'ibzdailyid',
          dataType: 'ACID',
        },
        {
          name: 'srfmstag',
        },
        {
          name: 'srfmajortext',
          prop: 'ibzdailyname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzdailyid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibzdailyid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzdaily',
          prop: 'ibzdailyid',
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