/**
 * MyReceived 部件模型
 *
 * @export
 * @class MyReceivedModel
 */
export default class MyReceivedModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MyReceivedGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyReceivedGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'ibz_monthlyid',
          prop: 'ibzmonthlyid',
          dataType: 'ACID',
        },
        {
          name: 'ibz_monthlyname',
          prop: 'ibzmonthlyname',
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
          name: 'reportstatus',
          prop: 'reportstatus',
          dataType: 'SSCODELIST',
        },
        {
          name: 'issubmit',
          prop: 'issubmit',
          dataType: 'SSCODELIST',
        },
        {
          name: 'srfmstag',
        },
        {
          name: 'srfmajortext',
          prop: 'ibzmonthlyname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzmonthlyid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibzmonthlyid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzmonthly',
          prop: 'ibzmonthlyid',
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