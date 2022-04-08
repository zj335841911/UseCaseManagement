/**
 * BurnDownChart 部件模型
 *
 * @export
 * @class BurnDownChartModel
 */
export default class BurnDownChartModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof BurnDownChartModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'isweekend',
      },
      {
        name: 'date',
      },
      {
        name: 'burn',
        prop: 'id',
      },
      {
        name: 'consumed',
      },
      {
        name: 'left',
      },
      {
        name: 'estimate',
      },
      {
        name: 'project',
      },
      {
        name: 'task',
      },
    ]
  }


}
