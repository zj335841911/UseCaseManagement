/**
 * UserFinishTaskSum 部件模型
 *
 * @export
 * @class UserFinishTaskSumModel
 */
export default class UserFinishTaskSumModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof UserFinishTaskSumGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof UserFinishTaskSumGridMode
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
          name: 'finishedby',
          prop: 'finishedby',
          dataType: 'TEXT',
        },
        {
          name: 'totalestimate',
          prop: 'totalestimate',
          dataType: 'INT',
        },
        {
          name: 'totalconsumed',
          prop: 'totalconsumed',
          dataType: 'INT',
        },
        {
          name: 'totalleft',
          prop: 'totalleft',
          dataType: 'INT',
        },
        {
          name: 'srfmajortext',
          prop: 'realname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
          isEditable:true
        },
        {
          name: 'ibzmyterritory',
          prop: 'id',
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