/**
 * DocLibL 部件模型
 *
 * @export
 * @class DocLibLModel
 */
export default class DocLibLModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof DocLibLGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof DocLibLGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'id',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'pathname',
          prop: 'pathname',
          dataType: 'TEXT',
        },
        {
          name: 'objecttype',
          prop: 'objecttype',
          dataType: 'SSCODELIST',
        },
        {
          name: 'strsize',
          prop: 'strsize',
          dataType: 'TEXT',
        },
        {
          name: 'addedby',
          prop: 'addedby',
          dataType: 'TEXT',
        },
        {
          name: 'addeddate',
          prop: 'addeddate',
          dataType: 'DATETIME',
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
          name: 'size',
          prop: 'size',
          dataType: 'INT',
        },
        {
          name: 'file',
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