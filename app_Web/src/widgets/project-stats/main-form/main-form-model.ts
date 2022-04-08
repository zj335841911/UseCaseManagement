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
        name: 'custom7',
        prop: 'totalwh',
        dataType: 'INT',
      },
      {
        name: 'custom8',
        prop: 'totalconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'formitemex4',
      },
      {
        name: 'totalestimate',
        prop: 'totalestimate',
        dataType: 'FLOAT',
      },
      {
        name: 'totalconsumed',
        prop: 'totalconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'totalleft',
        prop: 'totalleft',
        dataType: 'FLOAT',
      },
      {
        name: 'yesterdayctaskcnt',
        prop: 'yesterdayctaskcnt',
        dataType: 'INT',
      },
      {
        name: 'taskcnt',
        prop: 'taskcnt',
        dataType: 'INT',
      },
      {
        name: 'custom1',
        prop: 'taskcnt',
        dataType: 'INT',
      },
      {
        name: 'custom2',
        prop: 'finishtaskcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'undonetaskcnt',
        prop: 'undonetaskcnt',
        dataType: 'INT',
      },
      {
        name: 'releasedstorycnt',
        prop: 'releasedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'storycnt',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'custom3',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'custom4',
        prop: 'closedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex2',
      },
      {
        name: 'unclosedstorycnt',
        prop: 'unclosedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'yesterdayrbugcnt',
        prop: 'yesterdayrbugcnt',
        dataType: 'INT',
      },
      {
        name: 'bugcnt',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom5',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom6',
        prop: 'finishbugcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex3',
      },
      {
        name: 'activebugcnt',
        prop: 'activebugcnt',
        dataType: 'INT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'projectstats',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}