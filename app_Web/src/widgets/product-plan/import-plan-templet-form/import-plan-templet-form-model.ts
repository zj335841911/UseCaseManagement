/**
 * ImportPlanTemplet 部件模型
 *
 * @export
 * @class ImportPlanTempletModel
 */
export default class ImportPlanTempletModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ImportPlanTempletModel
  */
  public getDataItems(): any[] {
    return [
      {
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'srftempmode',
      },
      {
        name: 'srfuf',
      },
      {
        name: 'srfdeid',
      },
      {
        name: 'srfsourcekey',
      },
      {
        name: 'plantemplet',
        prop: 'plantemplet',
        dataType: 'SSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'productplan',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}