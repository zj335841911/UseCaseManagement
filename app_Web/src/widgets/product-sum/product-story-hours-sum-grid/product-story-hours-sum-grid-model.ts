/**
 * ProductStoryHoursSum 部件模型
 *
 * @export
 * @class ProductStoryHoursSumModel
 */
export default class ProductStoryHoursSumModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ProductStoryHoursSumGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ProductStoryHoursSumGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'po',
          prop: 'po',
          dataType: 'SSCODELIST',
        },
        {
          name: 'waitstagestoryhours',
          prop: 'waitstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'planedstagestoryhours',
          prop: 'planedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'projectedstagestoryhours',
          prop: 'projectedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'developingstagestoryhours',
          prop: 'developingstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'developedstagestoryhours',
          prop: 'developedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'testingstagestoryhours',
          prop: 'testingstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'testedstagestoryhours',
          prop: 'testedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'verifiedstagestoryhours',
          prop: 'verifiedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'releasedstagestoryhours',
          prop: 'releasedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'closedstagestoryhours',
          prop: 'closedstagestoryhours',
          dataType: 'INT',
        },
        {
          name: 'totalhours',
          prop: 'totalhours',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
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
          name: 'productsum',
          prop: 'id',
        },
      {
        name: 'closed',
        prop: 'closed',
      },
      {
        name: 'n_id_eq',
        prop: 'n_id_eq',
        dataType: 'ACID',
      },
      {
        name: 'productsum',
        prop: 'id',
        dataType: 'FONTKEY',
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