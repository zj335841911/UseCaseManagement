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
      ]
    }else{
		  return [
        {
          name: 'ibizpro_productdailyname',
          prop: 'ibizproproductweeklyname',
          dataType: 'TEXT',
        },
        {
          name: 'productname',
          prop: 'productname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'po',
          prop: 'po',
          dataType: 'TEXT',
        },
        {
          name: 'begindatestats',
          prop: 'begindatestats',
          dataType: 'TEXT',
        },
        {
          name: 'enddatestats',
          prop: 'enddatestats',
          dataType: 'TEXT',
        },
        {
          name: 'date',
          prop: 'date',
          dataType: 'DATE',
        },
        {
          name: 'totalestimates',
          prop: 'totalestimates',
          dataType: 'FLOAT',
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmstag',
        },
        {
          name: 'srfmajortext',
          prop: 'ibizproproductweeklyname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibizpro_productweeklyid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibizpro_productweeklyid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibizproproductweekly',
          prop: 'ibizpro_productweeklyid',
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