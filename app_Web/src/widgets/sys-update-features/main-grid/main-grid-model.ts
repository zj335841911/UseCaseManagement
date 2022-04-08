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
          name: 'sys_update_logname',
          prop: 'sysupdatelogname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'upfeatures',
          prop: 'upfeatures',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'displayorder',
          prop: 'displayorder',
          dataType: 'INT',
        },
        {
          name: 'updateman',
          prop: 'updateman',
          dataType: 'TEXT',
        },
        {
          name: 'updatedate',
          prop: 'updatedate',
          dataType: 'DATETIME',
        },
        {
          name: 'sys_update_logid',
          prop: 'sysupdatelogid',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmajortext',
          prop: 'sysupdatefeaturesname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'sysupdatefeaturesid',
          dataType: 'GUID',
        },
        {
          name: 'srfkey',
          prop: 'sysupdatefeaturesid',
          dataType: 'GUID',
          isEditable:true
        },
        {
          name: 'sysupdatefeatures',
          prop: 'sysupdatefeaturesid',
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