/**
 * CaseExp 部件模型
 *
 * @export
 * @class CaseExpModel
 */
export default class CaseExpModel {

  /**
    * 获取数据项集合
    *
    * @returns {any[]}
    * @memberof CaseExpModel
    */
  public getDataItems(): any[] {
    return [
      {
        name: 'path',
      },
      {
        name: 'orderpk',
      },
      {
        name: 'deleted',
      },
      {
        name: 'name',
      },
      {
        name: 'branch',
      },
      {
        name: 'ibizshort',
      },
      {
        name: 'order',
      },
      {
        name: 'grade',
      },
      {
        name: 'type',
      },
      {
        name: 'owner',
      },
      {
        name: 'isleaf',
      },
      {
        name: 'productmodule',
        prop: 'id',
      },
      {
        name: 'collector',
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