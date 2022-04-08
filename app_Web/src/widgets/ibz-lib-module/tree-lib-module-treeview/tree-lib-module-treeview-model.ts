/**
 * TreeLibModule 部件模型
 *
 * @export
 * @class TreeLibModuleModel
 */
export default class TreeLibModuleModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof TreeLibModuleModel
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