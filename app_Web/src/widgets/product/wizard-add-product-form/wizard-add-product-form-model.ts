/**
 * WizardAddProduct 部件模型
 *
 * @export
 * @class WizardAddProductModel
 */
export default class WizardAddProductModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof WizardAddProductModel
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
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'code',
        prop: 'code',
        dataType: 'TEXT',
      },
      {
        name: 'line',
        prop: 'line',
        dataType: 'PICKUP',
      },
      {
        name: 'linename',
        prop: 'linename',
        dataType: 'PICKUPTEXT',
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
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'acl',
        prop: 'acl',
        dataType: 'SSCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'product',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}