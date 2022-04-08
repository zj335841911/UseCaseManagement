/**
 * MyWork2 部件模型
 *
 * @export
 * @class MyWork2Model
 */
export default class MyWork2Model {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MyWork2Model
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'account',
        codelist:{tag:'UserRealName',codelistType:'DYNAMIC'},
        prop: 'account'
      },
      {
        name: 'mytasks',
        prop: 'mytasks'
      },
      {
        name: 'myetasks',
        prop: 'myetasks'
      },
      {
        name: 'mybugs',
        prop: 'mybugs'
      },
      {
        name: 'myebugs',
        prop: 'myebugs'
      },
      {
        name: 'mystorys',
        prop: 'mystorys'
      },
      {
        name: 'projects',
        prop: 'projects'
      },
      {
        name: 'eprojects',
        prop: 'eprojects'
      },
      {
        name: 'products',
        prop: 'products'
      }
    ]
  }
}