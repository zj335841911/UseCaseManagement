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
          name: 'orgid',
          prop: 'orgid',
          dataType: 'TEXT',
        },
        {
          name: 'shortname',
          prop: 'shortname',
          dataType: 'TEXT',
        },
        {
          name: 'domains',
          prop: 'domains',
          dataType: 'TEXT',
        },
        {
          name: 'orgname',
          prop: 'orgname',
          dataType: 'TEXT',
        },
        {
          name: 'orglevel',
          prop: 'orglevel',
          dataType: 'INT',
        },
        {
          name: 'porgid',
          prop: 'parentorgid',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'orgname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'orgid',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'orgid',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'sysorganization',
          prop: 'orgid',
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