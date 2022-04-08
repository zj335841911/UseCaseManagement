/**
 * CompleteForm 部件模型
 *
 * @export
 * @class CompleteFormModel
 */
export default class CompleteFormModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof CompleteFormModel
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
        prop: 'name',
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
        name: 'consumed',
        prop: 'consumed',
        dataType: 'FLOAT',
      },
      {
        name: 'myconsumed',
        prop: 'myconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'project',
        prop: 'project',
        dataType: 'PICKUP',
      },
      {
        name: 'currentconsumed',
        prop: 'currentconsumed',
        dataType: 'FLOAT',
      },
      {
        name: 'mytotaltime',
        prop: 'mytotaltime',
        dataType: 'FLOAT',
      },
      {
        name: 'totaltime',
        prop: 'totaltime',
        dataType: 'FLOAT',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'assignedtozj',
        prop: 'assignedtozj',
        dataType: 'TEXT',
      },
      {
        name: 'finisheddate',
        prop: 'finisheddate',
        dataType: 'DATE',
      },
      {
        name: 'multiple',
        prop: 'multiple',
        dataType: 'TEXT',
      },
      {
        name: 'noticeusers',
        prop: 'noticeusers',
        dataType: 'TEXT',
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
        name: 'task',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}