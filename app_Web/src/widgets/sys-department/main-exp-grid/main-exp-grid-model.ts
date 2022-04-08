/**
 * MainExp 部件模型
 *
 * @export
 * @class MainExpModel
 */
export default class MainExpModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainExpGridexpbar_gridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainExpGridexpbar_gridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'deptid',
          prop: 'deptid',
          dataType: 'TEXT',
        },
        {
          name: 'deptname',
          prop: 'deptname',
          dataType: 'TEXT',
        },
        {
          name: 'pdeptid',
          prop: 'parentdeptid',
          dataType: 'PICKUP',
        },
        {
          name: 'orgid',
          prop: 'orgid',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'deptname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'deptid',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'deptid',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'sysdepartment',
          prop: 'deptid',
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