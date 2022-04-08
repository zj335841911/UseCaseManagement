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
          name: 'ibizpro_pluginname',
          prop: 'ibizpropluginname',
          dataType: 'TEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'version',
          prop: 'version',
          dataType: 'INT',
        },
        {
          name: 'downloadurl',
          prop: 'downloadurl',
          dataType: 'TEXT',
        },
        {
          name: 'downloadcount',
          prop: 'downloadcount',
          dataType: 'INT',
        },
        {
          name: 'commentcount',
          prop: 'commentcount',
          dataType: 'INT',
        },
        {
          name: 'score',
          prop: 'score',
          dataType: 'INT',
        },
        {
          name: 'updatedate',
          prop: 'updatedate',
          dataType: 'DATETIME',
        },
        {
          name: 'updateman',
          prop: 'updateman',
          dataType: 'TEXT',
        },
        {
          name: 'srfmajortext',
          prop: 'ibizpropluginname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibizpropluginid',
          dataType: 'GUID',
        },
        {
          name: 'srfkey',
          prop: 'ibizpropluginid',
          dataType: 'GUID',
          isEditable:true
        },
        {
          name: 'ibizproplugin',
          prop: 'ibizpropluginid',
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