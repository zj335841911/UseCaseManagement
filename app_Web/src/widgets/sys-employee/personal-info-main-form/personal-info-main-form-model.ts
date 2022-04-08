/**
 * PersonalInfoMain 部件模型
 *
 * @export
 * @class PersonalInfoMainModel
 */
export default class PersonalInfoMainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof PersonalInfoMainModel
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
        name: 'srfupdatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
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
        name: 'loginname',
        prop: 'loginname',
        dataType: 'TEXT',
      },
      {
        name: 'personname',
        prop: 'personname',
        dataType: 'TEXT',
      },
      {
        name: 'sex',
        prop: 'sex',
        dataType: 'SSCODELIST',
      },
      {
        name: 'mdeptname',
        prop: 'mdeptname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'userid',
        prop: 'userid',
        dataType: 'TEXT',
      },
      {
        name: 'phone',
        prop: 'phone',
        dataType: 'TEXT',
      },
      {
        name: 'email',
        prop: 'email',
        dataType: 'TEXT',
      },
      {
        name: 'addr',
        prop: 'addr',
        dataType: 'TEXT',
      },
      {
        name: 'avatar',
        prop: 'avatar',
        dataType: 'TEXT',
      },
      {
        name: 'sysemployee',
        prop: 'userid',
        dataType: 'FONTKEY',
      },
    ]
  }

}