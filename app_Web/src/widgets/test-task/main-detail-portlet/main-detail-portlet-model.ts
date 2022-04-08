/**
 * MainDetail 部件模型
 *
 * @export
 * @class MainDetailModel
 */
export default class MainDetailModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof MainDetailModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'end',
      },
      {
        name: 'begin',
      },
      {
        name: 'ownerpk',
      },
      {
        name: 'mailto',
      },
      {
        name: 'casecnt',
      },
      {
        name: 'mailtopk',
      },
      {
        name: 'pri',
      },
      {
        name: 'comment',
      },
      {
        name: 'substatus',
      },
      {
        name: 'report',
      },
      {
        name: 'desc',
      },
      {
        name: 'testtask',
        prop: 'id',
      },
      {
        name: 'status',
      },
      {
        name: 'mailtoconact',
      },
      {
        name: 'owner',
      },
      {
        name: 'deleted',
      },
      {
        name: 'auto',
      },
      {
        name: 'name',
      },
      {
        name: 'buildname',
      },
      {
        name: 'productname',
      },
      {
        name: 'projecttname',
      },
      {
        name: 'product',
      },
      {
        name: 'build',
      },
      {
        name: 'project',
      },
    ]
  }


}
