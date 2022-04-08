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
        prop: 'realname',
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
        name: 'realname',
        prop: 'realname',
        dataType: 'TEXT',
      },
      {
        name: 'join',
        prop: 'join',
        dataType: 'DATE',
      },
      {
        name: 'dept',
        prop: 'dept',
        dataType: 'INT',
      },
      {
        name: 'role',
        prop: 'role',
        dataType: 'SSCODELIST',
      },
      {
        name: 'gender',
        prop: 'gender',
        dataType: 'SSCODELIST',
      },
      {
        name: 'account',
        prop: 'account',
        dataType: 'TEXT',
      },
      {
        name: 'email',
        prop: 'email',
        dataType: 'TEXT',
      },
      {
        name: 'password',
        prop: 'password',
        dataType: 'TEXT',
      },
      {
        name: 'mobile',
        prop: 'mobile',
        dataType: 'TEXT',
      },
      {
        name: 'phone',
        prop: 'phone',
        dataType: 'TEXT',
      },
      {
        name: 'qq',
        prop: 'qq',
        dataType: 'TEXT',
      },
      {
        name: 'dingding',
        prop: 'dingding',
        dataType: 'TEXT',
      },
      {
        name: 'weixin',
        prop: 'weixin',
        dataType: 'TEXT',
      },
      {
        name: 'address',
        prop: 'address',
        dataType: 'TEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'user',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}