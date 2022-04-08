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
        name: 'srfupdatedate',
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'ibzplantempletid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzplantempletname',
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
        name: 'ibz_plantempletname',
        prop: 'ibzplantempletname',
        dataType: 'TEXT',
      },
      {
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'plans',
        prop: 'plans',
        dataType: 'SMCODELIST',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'BIGINT',
      },
      {
        name: 'ibz_plantempletid',
        prop: 'ibzplantempletid',
        dataType: 'GUID',
      },
      {
        name: 'ibzplantemplet',
        prop: 'ibzplantempletid',
        dataType: 'FONTKEY',
      },
    ]
  }

}