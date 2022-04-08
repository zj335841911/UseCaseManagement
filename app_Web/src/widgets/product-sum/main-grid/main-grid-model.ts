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
          name: 'plan',
          prop: 'plan',
          dataType: 'BIGINT',
        },
        {
          name: 'begin',
          prop: 'begin',
          dataType: 'TEXT',
        },
        {
          name: 'end',
          prop: 'end',
          dataType: 'TEXT',
        },
        {
          name: 'waitstorycnt',
          prop: 'waitstorycnt',
          dataType: 'INT',
        },
        {
          name: 'activestorycnt',
          prop: 'activestorycnt',
          dataType: 'INT',
        },
        {
          name: 'changedstorycnt',
          prop: 'changedstorycnt',
          dataType: 'INT',
        },
        {
          name: 'closedstorycnt',
          prop: 'closedstorycnt',
          dataType: 'INT',
        },
        {
          name: 'storycnt',
          prop: 'storycnt',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
          dataType: 'TEXT',
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
          name: 'productsum',
          prop: 'id',
        },
      {
        name: 'closed',
        prop: 'closed',
      },
      {
        name: 'expired',
        prop: 'expired',
      },
      {
        name: 'n_id_eq',
        prop: 'n_id_eq',
        dataType: 'ACID',
      },
      {
        name: 'n_plan_eq',
        prop: 'n_plan_eq',
        dataType: 'BIGINT',
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