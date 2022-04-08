/**
 * MainEdit 部件模型
 *
 * @export
 * @class MainEditModel
 */
export default class MainEditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainEditModel
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
        name: 'doclibname',
        prop: 'doclibname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'docqtype',
        prop: 'docqtype',
        dataType: 'TEXT',
      },
      {
        name: 'isfavourites',
        prop: 'isfavourites',
        dataType: 'TEXT',
      },
      {
        name: 'root',
        prop: 'root',
        dataType: 'PICKUP',
      },
      {
        name: 'doclibmodule',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}