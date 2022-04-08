/**
 * PickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class PickupViewpickupviewpanelModel
 */
export default class PickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof PickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'manager',
      },
      {
        name: 'grade',
      },
      {
        name: 'function',
      },
      {
        name: 'order',
      },
      {
        name: 'path',
      },
      {
        name: 'position',
      },
      {
        name: 'dept',
        prop: 'id',
      },
      {
        name: 'name',
      },
      {
        name: 'parentname',
      },
      {
        name: 'parent',
      },
      {
        name: 'isleaf',
      },
    ]
  }


}