/**
 * TestMain2 部件模型
 *
 * @export
 * @class TestMain2Model
 */
export default class TestMain2Model {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof TestMain2Model
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
        name: 'custom1',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom2',
        prop: 'assigntomebugcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'assigntomebugcnt',
        prop: 'assigntomebugcnt',
        dataType: 'INT',
      },
      {
        name: 'yesterdayresolvedbugcnt',
        prop: 'yesterdayresolvedbugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom3',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom4',
        prop: 'activebugcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex2',
      },
      {
        name: 'activebugcnt',
        prop: 'activebugcnt',
        dataType: 'INT',
      },
      {
        name: 'yesterdayconfirmbugcnt',
        prop: 'yesterdayconfirmbugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom5',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom6',
        prop: 'unconfirmbugcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex3',
      },
      {
        name: 'unconfirmbugcnt',
        prop: 'unconfirmbugcnt',
        dataType: 'INT',
      },
      {
        name: 'yesterdayclosedbugcnt',
        prop: 'yesterdayclosedbugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom7',
        prop: 'bugcnt',
        dataType: 'INT',
      },
      {
        name: 'custom8',
        prop: 'notclosedbugcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex4',
      },
      {
        name: 'notclosedbugcnt',
        prop: 'notclosedbugcnt',
        dataType: 'INT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'productstats',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}