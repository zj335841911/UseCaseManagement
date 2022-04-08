/**
 * AssigntoForm 部件模型
 *
 * @export
 * @class AssigntoFormModel
 */
export default class AssigntoFormModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof AssigntoFormModel
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
        name: 'assignto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'future',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'NSCODELIST',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'NSCODELIST',
      },
      {
        name: 'lbldisabledate',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'todo',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}