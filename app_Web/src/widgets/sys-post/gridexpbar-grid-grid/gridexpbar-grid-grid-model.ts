/**
 * Gridexpbar_grid 部件模型
 *
 * @export
 * @class Gridexpbar_gridModel
 */
export default class Gridexpbar_gridModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof Gridexpbar_gridGridexpbar_gridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Gridexpbar_gridGridexpbar_gridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'srfmajortext',
          prop: 'postname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'postid',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'postid',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'syspost',
          prop: 'postid',
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