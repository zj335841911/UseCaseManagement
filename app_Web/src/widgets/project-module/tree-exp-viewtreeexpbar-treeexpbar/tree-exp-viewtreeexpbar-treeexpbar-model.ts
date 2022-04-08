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
        name: 'ibizshort',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'type',
      },
      {
        name: 'orderpk',
      },
      {
        name: 'name',
      },
      {
        name: 'order',
      },
      {
        name: 'collector',
      },
      {
        name: 'grade',
      },
      {
        name: 'branch',
      },
      {
        name: 'path',
      },
      {
        name: 'projectmodule',
        prop: 'id',
      },
      {
        name: 'owner',
      },
      {
        name: 'deleted',
      },
      {
        name: 'rootname',
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