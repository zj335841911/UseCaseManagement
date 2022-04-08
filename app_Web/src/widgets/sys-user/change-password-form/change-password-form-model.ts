/**
 * ChangePassword 部件模型
 *
 * @export
 * @class ChangePasswordModel
 */
export default class ChangePasswordModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ChangePasswordModel
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
        prop: 'userid',
        dataType: 'TEXT',
      },
      {
        name: 'srfmajortext',
        prop: 'personname',
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
        name: 'username',
        prop: 'username',
        dataType: 'TEXT',
      },
      {
        name: 'originalpassword',
        prop: 'originalpassword',
        dataType: 'TEXT',
      },
      {
        name: 'newpassword',
        prop: 'newpassword',
        dataType: 'TEXT',
      },
      {
        name: 'repeatpassword',
        prop: 'repeatpassword',
        dataType: 'TEXT',
      },
      {
        name: 'userid',
        prop: 'userid',
        dataType: 'TEXT',
      },
      {
        name: 'sysuser',
        prop: 'userid',
        dataType: 'FONTKEY',
      },
    ]
  }

}