/**
 * Resolve 部件模型
 *
 * @export
 * @class ResolveModel
 */
export default class ResolveModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ResolveModel
  */
  public getDataItems(): any[] {
    return [
      {
        name: 'srfwfmemo',
        prop: 'srfwfmemo',
        dataType: 'TEXT',
      },
      // 前端新增修改标识，新增为"0",修改为"1"或未设值
      {
        name: 'srffrontuf',
        prop: 'srffrontuf',
        dataType: 'TEXT',
      },
      {
        name: 'srfupdatedate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'srftempmode',
      },
      {
        name: 'srfuf',
      },
      {
        name: 'srfdeid',
      },
      {
        name: 'srfsourcekey',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'resolution',
        prop: 'resolution',
        dataType: 'SSCODELIST',
      },
      {
        name: 'resolvedbuild',
        prop: 'resolvedbuild',
        dataType: 'SSCODELIST',
      },
      {
        name: 'buildproject',
        prop: 'buildproject',
        dataType: 'SSCODELIST',
      },
      {
        name: 'buildname',
        prop: 'buildname',
        dataType: 'TEXT',
      },
      {
        name: 'createbuild',
        prop: 'createbuild',
        dataType: 'INT',
      },
      {
        name: 'resolveddate',
        prop: 'resolveddate',
        dataType: 'DATETIME',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'files',
        prop: 'files',
        dataType: 'TEXT',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'bug',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}