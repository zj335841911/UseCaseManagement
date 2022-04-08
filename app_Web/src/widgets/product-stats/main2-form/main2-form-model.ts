/**
 * Main2 部件模型
 *
 * @export
 * @class Main2Model
 */
export default class Main2Model {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof Main2Model
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
        name: 'product',
      },
      {
        name: 'storycnt',
        prop: 'storycnt',
        dataType: 'INT',
      },
      {
        name: 'waitstorycnt',
        prop: 'waitstorycnt',
        dataType: 'INT',
      },
      {
        name: 'plannedstorycnt',
        prop: 'plannedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'developingstorycnt',
        prop: 'developingstorycnt',
        dataType: 'INT',
      },
      {
        name: 'testingstorycnt',
        prop: 'testingstorycnt',
        dataType: 'INT',
      },
      {
        name: 'releasedstorycnt',
        prop: 'releasedstorycnt',
        dataType: 'INT',
      },
      {
        name: 'custom1',
        prop: 'productplancnt',
        dataType: 'INT',
      },
      {
        name: 'custom2',
        prop: 'unendproductplancnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex1',
      },
      {
        name: 'custom3',
        prop: 'resprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'custom4',
        prop: 'undoneresprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex2',
      },
      {
        name: 'postponedprojectcnt',
        prop: 'postponedprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'custom5',
        prop: 'releasecnt',
        dataType: 'INT',
      },
      {
        name: 'custom6',
        prop: 'normalreleasecnt',
        dataType: 'INT',
      },
      {
        name: 'formitemex3',
      },
      {
        name: 'productplancnt',
        prop: 'productplancnt',
        dataType: 'INT',
      },
      {
        name: 'unendproductplancnt',
        prop: 'unendproductplancnt',
        dataType: 'INT',
      },
      {
        name: 'resprojectcnt',
        prop: 'resprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'undoneresprojectcnt',
        prop: 'undoneresprojectcnt',
        dataType: 'INT',
      },
      {
        name: 'releasecnt',
        prop: 'releasecnt',
        dataType: 'INT',
      },
      {
        name: 'normalreleasecnt',
        prop: 'normalreleasecnt',
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