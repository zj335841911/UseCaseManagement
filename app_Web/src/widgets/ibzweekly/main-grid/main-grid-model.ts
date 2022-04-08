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
          name: 'ibz_weeklyid',
          prop: 'ibzweeklyid',
          dataType: 'ACID',
        },
        {
          name: 'ibz_weeklyname',
          prop: 'ibzweeklyname',
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
      ]
    }else{
		  return [
        {
          name: 'ibz_weeklyname',
          prop: 'ibzweeklyname',
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
          name: 'ibz_weeklyid',
          prop: 'ibzweeklyid',
          dataType: 'ACID',
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
          prop: 'ibzweeklyname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzweeklyid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibzweeklyid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzweekly',
          prop: 'ibzweeklyid',
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