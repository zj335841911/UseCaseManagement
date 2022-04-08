/**
 * ModuleWeiHu 部件模型
 *
 * @export
 * @class ModuleWeiHuModel
 */
export default class ModuleWeiHuModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof ModuleWeiHuModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'isfavourites',
      },
      {
        name: 'grade',
      },
      {
        name: 'path',
      },
      {
        name: 'order',
      },
      {
        name: 'name',
      },
      {
        name: 'docqtype',
      },
      {
        name: 'owner',
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
        name: 'doccnt',
      },
      {
        name: 'collector',
      },
      {
        name: 'doclibmodule',
        prop: 'id',
      },
      {
        name: 'deleted',
      },
      {
        name: 'modulename',
      },
      {
        name: 'doclibname',
      },
      {
        name: 'parent',
      },
      {
        name: 'root',
      },
    ]
  }


}