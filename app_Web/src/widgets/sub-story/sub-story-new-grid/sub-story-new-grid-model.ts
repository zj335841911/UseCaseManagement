/**
 * SubStoryNew 部件模型
 *
 * @export
 * @class SubStoryNewModel
 */
export default class SubStoryNewModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof SubStoryNewGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof SubStoryNewGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'modulename',
          prop: 'modulename',
          dataType: 'PICKUPTEXT',
          isEditable:true
        },
        {
          name: 'plan',
          prop: 'plan',
          dataType: 'LONGTEXT',
          isEditable:true
        },
        {
          name: 'title',
          prop: 'title',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'spec',
          prop: 'spec',
          dataType: 'HTMLTEXT',
          isEditable:true
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
          isEditable:true
        },
        {
          name: 'storypoints',
          prop: 'storypoints',
          dataType: 'SSCODELIST',
          isEditable:true
        },
        {
          name: 'estimate',
          prop: 'estimate',
          dataType: 'FLOAT',
          isEditable:true
        },
        {
          name: 'neednotreview',
          prop: 'neednotreview',
          dataType: 'SMCODELIST',
          isEditable:true
        },
        {
          name: 'product',
          prop: 'product',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'srfmstag',
        },
        {
          name: 'srfmajortext',
          prop: 'title',
          dataType: 'TEXT',
        },
        {
          name: 'tobug',
          prop: 'tobug',
          dataType: 'PICKUP',
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
          name: 'branch',
          prop: 'branch',
          dataType: 'PICKUP',
        },
        {
          name: 'duplicatestory',
          prop: 'duplicatestory',
          dataType: 'PICKUP',
        },
        {
          name: 'plan_text',
          prop: 'plan',
          dataType: 'LONGTEXT',
        },
        {
          name: 'substory',
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