/**
 * Close 部件模型
 *
 * @export
 * @class CloseModel
 */
export default class CloseModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof CloseModel
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
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'mailtoconact',
        prop: 'mailtoconact',
        dataType: 'TEXT',
      },
      {
        name: 'mailtopk',
        prop: 'mailtopk',
        dataType: 'SMCODELIST',
      },
      {
        name: 'testtask',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}