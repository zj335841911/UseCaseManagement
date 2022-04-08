/**
 * IndexMob2 部件模型
 *
 * @export
 * @class IndexMob2Model
 */
export default class IndexMob2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof IndexMob2Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'indextype',
        codelist:{tag:'IndexType',codelistType:'STATIC'},
        prop: 'indextype'
      },
      {
        name: 'indexid',
        prop: 'indexid'
      },
      {
        name: 'indexname',
        prop: 'indexname'
      }
    ]
  }
}