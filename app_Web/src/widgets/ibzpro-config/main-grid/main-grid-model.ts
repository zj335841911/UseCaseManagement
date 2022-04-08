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
          name: 'ibzpro_configname',
          prop: 'ibzproconfigname',
          dataType: 'TEXT',
        },
        {
          name: 'scope',
          prop: 'scope',
          dataType: 'SSCODELIST',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'vaild',
          prop: 'vaild',
          dataType: 'SSCODELIST',
        },
        {
          name: 'managementstatus',
          prop: 'managementstatus',
          dataType: 'SSCODELIST',
        },
        {
          name: 'memo',
          prop: 'memo',
          dataType: 'TEXT',
        },
        {
          name: 'srfmajortext',
          prop: 'ibzproconfigname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzproconfigid',
          dataType: 'GUID',
        },
        {
          name: 'srfkey',
          prop: 'ibzproconfigid',
          dataType: 'GUID',
          isEditable:true
        },
        {
          name: 'ibzproconfig',
          prop: 'ibzproconfigid',
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