/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainModel
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
        dataType: 'PICKUPDATA',
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATETIME',
      },
      {
        name: 'lastrunner',
        prop: 'lastrunner',
        dataType: 'TEXT',
      },
      {
        name: 'caseresult',
        prop: 'caseresult',
        dataType: 'SSCODELIST',
      },
      {
        name: 'formitem',
      },
      {
        name: 'title',
        prop: 'title',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'module',
        prop: 'module',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'modulename',
        prop: 'modulename',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'job',
        prop: 'job',
        dataType: 'PICKUP',
      },
      {
        name: 'precondition',
        prop: 'precondition',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'case',
        prop: 'ibizcase',
        dataType: 'PICKUP',
      },
      {
        name: 'testresult',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}