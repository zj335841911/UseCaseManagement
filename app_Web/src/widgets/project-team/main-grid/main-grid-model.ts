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
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'role',
          prop: 'role',
          dataType: 'TEXT',
        },
        {
          name: 'join',
          prop: 'join',
          dataType: 'DATE',
        },
        {
          name: 'days',
          prop: 'days',
          dataType: 'INT',
        },
        {
          name: 'hours',
          prop: 'hours',
          dataType: 'FLOAT',
        },
        {
          name: 'total',
          prop: 'total',
          dataType: 'INT',
        },
        {
          name: 'limited',
          prop: 'limited',
          dataType: 'SSCODELIST',
        },
      ]
    }else{
		  return [
        {
          name: 'account',
          prop: 'account',
          dataType: 'TEXT',
        },
        {
          name: 'role',
          prop: 'role',
          dataType: 'TEXT',
        },
        {
          name: 'join',
          prop: 'join',
          dataType: 'DATE',
        },
        {
          name: 'days',
          prop: 'days',
          dataType: 'INT',
        },
        {
          name: 'hours',
          prop: 'hours',
          dataType: 'FLOAT',
        },
        {
          name: 'total',
          prop: 'total',
          dataType: 'INT',
        },
        {
          name: 'limited',
          prop: 'limited',
          dataType: 'SSCODELIST',
        },
        {
          name: 'root',
          prop: 'root',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'account',
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
          name: 'projectteam',
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