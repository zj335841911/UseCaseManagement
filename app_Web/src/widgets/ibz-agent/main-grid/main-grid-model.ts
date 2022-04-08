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
          name: 'ibz_agentid',
          prop: 'ibzagentid',
          dataType: 'ACID',
        },
        {
          name: 'agentuser',
          prop: 'agentuser',
          dataType: 'TEXT',
        },
        {
          name: 'agentbegin',
          prop: 'agentbegin',
          dataType: 'DATE',
        },
        {
          name: 'agentend',
          prop: 'agentend',
          dataType: 'DATE',
        },
        {
          name: 'srfmajortext',
          prop: 'ibzagentname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzagentid',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'ibzagentid',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzagent',
          prop: 'ibzagentid',
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