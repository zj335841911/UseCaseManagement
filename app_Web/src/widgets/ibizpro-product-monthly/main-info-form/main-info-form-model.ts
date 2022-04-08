/**
 * MainInfo 部件模型
 *
 * @export
 * @class MainInfoModel
 */
export default class MainInfoModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainInfoModel
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
        prop: 'ibizproproductmonthlyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibizproproductmonthlyname',
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
        name: 'productname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'po',
        prop: 'po',
        dataType: 'PICKUPDATA',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'totalestimates',
        prop: 'totalestimates',
        dataType: 'FLOAT',
      },
      {
        name: 'tasks',
        prop: 'tasks',
        dataType: 'TEXT',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'year_month',
        prop: 'yearmonth',
        dataType: 'TEXT',
      },
      {
        name: 'ibizpro_productmonthlyid',
        prop: 'ibizproproductmonthlyid',
        dataType: 'ACID',
      },
      {
        name: 'ibizproproductmonthly',
        prop: 'ibizproproductmonthlyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}