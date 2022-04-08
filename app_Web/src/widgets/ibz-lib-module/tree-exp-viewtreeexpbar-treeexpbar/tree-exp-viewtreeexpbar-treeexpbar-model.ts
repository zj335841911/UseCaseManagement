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
        name: 'deleted',
      },
      {
        name: 'ibzlibmodule',
        prop: 'id',
      },
      {
        name: 'branch',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'type',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'grade',
      },
      {
        name: 'collector',
      },
      {
        name: 'path',
      },
      {
        name: 'name',
      },
      {
        name: 'owner',
      },
      {
        name: 'order',
      },
      {
        name: 'parentname',
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