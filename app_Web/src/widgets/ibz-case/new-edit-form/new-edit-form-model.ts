/**
 * NewEdit 部件模型
 *
 * @export
 * @class NewEditModel
 */
export default class NewEditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof NewEditModel
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
        name: 'openedby',
        prop: 'openedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'openeddate',
        prop: 'openeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'lastediteddate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'ibzcase',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}