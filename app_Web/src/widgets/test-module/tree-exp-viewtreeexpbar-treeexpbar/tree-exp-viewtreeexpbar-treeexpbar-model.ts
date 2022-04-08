/**
 * TreeExpViewtreeexpbar 部件模型
 *
 * @export
 * @class TreeExpViewtreeexpbarModel
 */
export default class TreeExpViewtreeexpbarModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TreeExpViewtreeexpbarModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'type',
      },
      {
        name: 'path',
      },
      {
        name: 'owner',
      },
      {
        name: 'order',
      },
      {
        name: 'deleted',
      },
      {
        name: 'branch',
      },
      {
        name: 'collector',
      },
      {
        name: 'testmodule',
        prop: 'id',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'name',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'grade',
      },
      {
        name: 'parentname',
      },
      {
        name: 'rootname',
      },
      {
        name: 'root',
      },
      {
        name: 'parent',
      },
    ]
  }


}