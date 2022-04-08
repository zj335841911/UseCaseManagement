/**
 * Main_Edit 部件模型
 *
 * @export
 * @class Main_EditModel
 */
export default class Main_EditModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof Main_EditGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof Main_EditGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'desc',
          prop: 'desc',
          dataType: 'HTMLTEXT',
          isEditable:true
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
          isEditable:true
        },
        {
          name: 'expect',
          prop: 'expect',
          dataType: 'HTMLTEXT',
          isEditable:true
        },
        {
          name: 'srfmajortext',
          prop: 'ibzplantempletdetailname',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'ibzplantempletdetailid',
          dataType: 'GUID',
        },
        {
          name: 'srfkey',
          prop: 'ibzplantempletdetailid',
          dataType: 'GUID',
          isEditable:true
        },
        {
          name: 'plancode',
          prop: 'plancode',
          dataType: 'TEXT',
          isEditable:true
        },
        {
          name: 'plantempletid',
          prop: 'plantempletid',
          dataType: 'PICKUP',
          isEditable:true
        },
        {
          name: 'ibzplantemplet',
          prop: 'plantempletid',
          dataType: 'FONTKEY',
        },
        {
          name: 'ibzplantempletdetail',
          prop: 'ibzplantempletdetailid',
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