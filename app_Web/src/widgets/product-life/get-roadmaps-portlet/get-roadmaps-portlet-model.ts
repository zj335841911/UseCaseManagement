/**
 * GetRoadmaps 部件模型
 *
 * @export
 * @class GetRoadmapsModel
 */
export default class GetRoadmapsModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof GetRoadmapsModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'branch',
      },
      {
        name: 'createman',
      },
      {
        name: 'updatedate',
      },
      {
        name: 'productlifename',
      },
      {
        name: 'product',
      },
      {
        name: 'createdate',
      },
      {
        name: 'parent',
      },
      {
        name: 'year',
      },
      {
        name: 'updateman',
      },
      {
        name: 'type',
      },
      {
        name: 'marker',
      },
      {
        name: 'begin',
      },
      {
        name: 'productlife',
        prop: 'productlifeid',
      },
      {
        name: 'end',
      },
    ]
  }


}
