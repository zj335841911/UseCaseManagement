/**
 * ModuleExp 部件模型
 *
 * @export
 * @class ModuleExpModel
 */
export default class ModuleExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ModuleExpModel
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