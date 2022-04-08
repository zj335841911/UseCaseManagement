/**
 * IndexPickupViewpickupviewpanel 部件模型
 *
 * @export
 * @class IndexPickupViewpickupviewpanelModel
 */
export default class IndexPickupViewpickupviewpanelModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof IndexPickupViewpickupviewpanelModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'ibizproindex',
        prop: 'indexid',
      },
      {
        name: 'acl',
      },
      {
        name: 'docid',
      },
      {
        name: 'indexname',
      },
      {
        name: 'color',
      },
      {
        name: 'deleted',
      },
      {
        name: 'acllist',
      },
      {
        name: 'indexdesc',
      },
      {
        name: 'product',
      },
      {
        name: 'indextype',
      },
      {
        name: 'mdeptid',
      },
      {
        name: 'project',
      },
      {
        name: 'orgid',
      },
    ]
  }


}