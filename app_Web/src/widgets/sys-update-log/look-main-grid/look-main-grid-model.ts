/**
 * LookMain 部件模型
 *
 * @export
 * @class LookMainModel
 */
export default class LookMainModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof LookMainGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof LookMainGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'sys_update_logname',
          prop: 'sysupdatelogname',
          dataType: 'TEXT',
        },
        {
          name: 'update',
          prop: 'update',
          dataType: 'DATE',
        },
        {
          name: 'srfmajortext',
          prop: 'sysupdatelogname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'sysupdatelogid',
          dataType: 'GUID',
        },
        {
          name: 'srfkey',
          prop: 'sysupdatelogid',
          dataType: 'GUID',
          isEditable:true
        },
        {
          name: 'sysupdatelog',
          prop: 'sysupdatelogid',
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