/**
 * BugResolvedGird 部件模型
 *
 * @export
 * @class BugResolvedGirdModel
 */
export default class BugResolvedGirdModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof BugResolvedGirdGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof BugResolvedGirdGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
        {
          name: 'resolvedby',
          prop: 'resolvedby',
          dataType: 'SSCODELIST',
        },
        {
          name: 'bugid',
          prop: 'bugid',
          dataType: 'INT',
        },
        {
          name: 'bugtitle',
          prop: 'bugtitle',
          dataType: 'TEXT',
        },
        {
          name: 'bugpri',
          prop: 'bugpri',
          dataType: 'INT',
        },
        {
          name: 'bugseverity',
          prop: 'bugseverity',
          dataType: 'INT',
        },
        {
          name: 'bugopenedby',
          prop: 'bugopenedby',
          dataType: 'TEXT',
        },
        {
          name: 'bugopeneddate',
          prop: 'bugopeneddate',
          dataType: 'DATE',
        },
        {
          name: 'bugresolution',
          prop: 'bugresolution',
          dataType: 'TEXT',
        },
        {
          name: 'bugresolveddate',
          prop: 'bugresolveddate',
          dataType: 'DATE',
        },
        {
          name: 'bugstatus',
          prop: 'bugstatus',
          dataType: 'TEXT',
        },
      ]
    }else{
		  return [
        {
          name: 'resolvedby',
          prop: 'resolvedby',
          dataType: 'SSCODELIST',
        },
        {
          name: 'bugid',
          prop: 'bugid',
          dataType: 'INT',
        },
        {
          name: 'bugtitle',
          prop: 'bugtitle',
          dataType: 'TEXT',
        },
        {
          name: 'bugpri',
          prop: 'bugpri',
          dataType: 'INT',
        },
        {
          name: 'bugseverity',
          prop: 'bugseverity',
          dataType: 'INT',
        },
        {
          name: 'bugopenedby',
          prop: 'bugopenedby',
          dataType: 'TEXT',
        },
        {
          name: 'bugopeneddate',
          prop: 'bugopeneddate',
          dataType: 'DATE',
        },
        {
          name: 'bugresolution',
          prop: 'bugresolution',
          dataType: 'TEXT',
        },
        {
          name: 'bugresolveddate',
          prop: 'bugresolveddate',
          dataType: 'DATE',
        },
        {
          name: 'bugstatus',
          prop: 'bugstatus',
          dataType: 'TEXT',
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
        name: 'n_dept_eq',
        prop: 'n_dept_eq',
        dataType: 'SSCODELIST',
      },
      {
        name: 'n_begin_gtandeq',
        prop: 'n_begin_gtandeq',
        dataType: 'DATE',
      },
      {
        name: 'n_end_ltandeq',
        prop: 'n_end_ltandeq',
        dataType: 'DATE',
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