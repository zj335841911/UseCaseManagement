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
        name: 'root',
      },
      {
        name: 'grade',
      },
      {
        name: 'type',
      },
      {
        name: 'name',
      },
      {
        name: 'order',
      },
      {
        name: 'owner',
      },
      {
        name: 'module',
        prop: 'id',
      },
      {
        name: 'orderpk',
      },
      {
        name: 'collector',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'path',
      },
      {
        name: 'mdeptid',
      },
      {
        name: 'orgid',
      },
      {
        name: 'deleted',
      },
      {
        name: 'parentname',
      },
      {
        name: 'branch',
      },
      {
        name: 'parent',
      },
    ]
  }


}