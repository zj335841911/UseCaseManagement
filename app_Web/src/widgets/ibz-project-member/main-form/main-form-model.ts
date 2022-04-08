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
        prop: 'name',
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
        name: 'pm',
        prop: 'pm',
        dataType: 'TEXT',
      },
      {
        name: 'po',
        prop: 'po',
        dataType: 'TEXT',
      },
      {
        name: 'qd',
        prop: 'qd',
        dataType: 'TEXT',
      },
      {
        name: 'rd',
        prop: 'rd',
        dataType: 'TEXT',
      },
      {
        name: 'fristmember',
        prop: 'fristmember',
        dataType: 'TEXT',
      },
      {
        name: 'secondmember',
        prop: 'secondmember',
        dataType: 'TEXT',
      },
      {
        name: 'thirdmember',
        prop: 'thirdmember',
        dataType: 'TEXT',
      },
      {
        name: 'fourthmember',
        prop: 'fourthmember',
        dataType: 'TEXT',
      },
      {
        name: 'fifthmember',
        prop: 'fifthmember',
        dataType: 'TEXT',
      },
      {
        name: 'sixthmember',
        prop: 'sixthmember',
        dataType: 'TEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'ibzprojectmember',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}