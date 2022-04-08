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
        prop: 'ibizpro_productweeklyid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibizproproductweeklyname',
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
        dataType: 'TEXT',
      },
      {
        name: 'totalestimates',
        prop: 'totalestimates',
        dataType: 'FLOAT',
      },
      {
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'enddatestats',
        prop: 'enddatestats',
        dataType: 'TEXT',
      },
      {
        name: 'begindatestats',
        prop: 'begindatestats',
        dataType: 'TEXT',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'tasks',
        prop: 'tasks',
        dataType: 'TEXT',
      },
      {
        name: 'ibizpro_productweeklyid',
        prop: 'ibizpro_productweeklyid',
        dataType: 'ACID',
      },
      {
        name: 'ibizproproductweekly',
        prop: 'ibizpro_productweeklyid',
        dataType: 'FONTKEY',
      },
    ]
  }

}