/**
 * BUGRESOLUTIONCNT 部件模型
 *
 * @export
 * @class BUGRESOLUTIONCNTModel
 */
export default class BUGRESOLUTIONCNTModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof BUGRESOLUTIONCNTGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BUGRESOLUTIONCNTGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'projectname',
          prop: 'projectname',
          dataType: 'TEXT',
        },
        {
          name: 'bugduplicate',
          prop: 'bugduplicate',
          dataType: 'INT',
        },
        {
          name: 'bugbydesign',
          prop: 'bugbydesign',
          dataType: 'INT',
        },
        {
          name: 'bugfixed',
          prop: 'bugfixed',
          dataType: 'INT',
        },
        {
          name: 'bugpostponed',
          prop: 'bugpostponed',
          dataType: 'INT',
        },
        {
          name: 'bugnotrepro',
          prop: 'bugnotrepro',
          dataType: 'INT',
        },
        {
          name: 'bugtostory',
          prop: 'bugtostory',
          dataType: 'INT',
        },
        {
          name: 'bugwillnotfix',
          prop: 'bugwillnotfix',
          dataType: 'INT',
        },
        {
          name: 'bugexternal',
          prop: 'bugexternal',
          dataType: 'INT',
        },
        {
          name: 'bugcnt',
          prop: 'bugcnt',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'bugstats',
          prop: 'id',
        },
      {
        name: 'openeddatelt',
        prop: 'openeddatelt',
      },
      {
        name: 'openeddategt',
        prop: 'openeddategt',
      },
      {
        name: 'producteq',
        prop: 'producteq',
      },
      {
        name: 'projecteq',
        prop: 'projecteq',
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