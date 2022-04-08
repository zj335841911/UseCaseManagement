/**
 * DOCSTATUS 部件模型
 *
 * @export
 * @class DOCSTATUSModel
 */
export default class DOCSTATUSModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof DOCSTATUSModel
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
        prop: 'title',
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
        name: 'alldoccnt1',
        prop: 'alldoccnt',
        dataType: 'INT',
      },
      {
        name: 'recentupdatecnt',
        prop: 'recentupdatecnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'alldoccnt2',
        prop: 'alldoccnt',
        dataType: 'INT',
      },
      {
        name: 'recentaddcnt',
        prop: 'recentaddcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex2',
      },
      {
        name: 'alldoccnt3',
        prop: 'alldoccnt',
        dataType: 'INT',
      },
      {
        name: 'mydoccnt',
        prop: 'mydoccnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex3',
      },
      {
        name: 'alldoccnt4',
        prop: 'alldoccnt',
        dataType: 'INT',
      },
      {
        name: 'myfavouritecnt',
        prop: 'myfavouritecnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex4',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'doc',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}