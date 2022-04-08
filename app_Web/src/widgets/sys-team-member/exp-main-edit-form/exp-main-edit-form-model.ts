/**
 * ExpMainEdit 部件模型
 *
 * @export
 * @class ExpMainEditModel
 */
export default class ExpMainEditModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ExpMainEditModel
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
        prop: 'teammemberid',
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
        name: 'username',
        prop: 'username',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'postname',
        prop: 'postname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'teammemberid',
        prop: 'teammemberid',
        dataType: 'TEXT',
      },
      {
        name: 'systeammember',
        prop: 'teammemberid',
        dataType: 'FONTKEY',
      },
    ]
  }

}