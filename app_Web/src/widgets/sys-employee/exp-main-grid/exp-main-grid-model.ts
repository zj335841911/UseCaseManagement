/**
 * ExpMain 部件模型
 *
 * @export
 * @class ExpMainModel
 */
export default class ExpMainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof ExpMainGridexpbar_gridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof ExpMainGridexpbar_gridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'userid',
          prop: 'userid',
          dataType: 'TEXT',
        },
        {
          name: 'personname',
          prop: 'personname',
          dataType: 'TEXT',
        },
        {
          name: 'nickname',
          prop: 'nickname',
          dataType: 'TEXT',
        },
        {
          name: 'orgid',
          prop: 'orgid',
          dataType: 'PICKUP',
        },
        {
          name: 'mdeptid',
          prop: 'mdeptid',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'personname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'userid',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'userid',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'sysemployee',
          prop: 'userid',
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