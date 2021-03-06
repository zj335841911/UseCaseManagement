/**
 * MainExp 部件模型
 *
 * @export
 * @class MainExpModel
 */
export default class MainExpModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof MainExpGridexpbar_gridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MainExpGridexpbar_gridMode
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
          dataType: 'PICKUP',
        },
        {
          name: 'personname',
          prop: 'personname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'postid',
          prop: 'postid',
          dataType: 'PICKUP',
        },
        {
          name: 'teamid',
          prop: 'teamid',
          dataType: 'PICKUP',
        },
        {
          name: 'teamname',
          prop: 'teamname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'teammemberid',
          dataType: 'TEXT',
        },
        {
          name: 'srfkey',
          prop: 'teammemberid',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'teammemberid',
          prop: 'teammemberid',
          dataType: 'TEXT',
        },
        {
          name: 'systeammember',
          prop: 'teammemberid',
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