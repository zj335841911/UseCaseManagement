/**
 * Review 部件模型
 *
 * @export
 * @class ReviewModel
 */
export default class ReviewModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof ReviewModel
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
        name: 'title',
        prop: 'title',
        dataType: 'TEXT',
      },
      {
        name: 'revieweddate',
        prop: 'revieweddate',
        dataType: 'DATE',
      },
      {
        name: 'result',
        prop: 'result',
        dataType: 'SSCODELIST',
      },
      {
        name: 'assessresult',
        prop: 'assessresult',
        dataType: 'SSCODELIST',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'NSCODELIST',
      },
      {
        name: 'storypoints',
        prop: 'storypoints',
        dataType: 'SSCODELIST',
      },
      {
        name: 'estimate',
        prop: 'estimate',
        dataType: 'FLOAT',
      },
      {
        name: 'preversion',
        prop: 'preversion',
        dataType: 'INT',
      },
      {
        name: 'closedreason',
        prop: 'closedreason',
        dataType: 'SSCODELIST',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'reviewedby',
        prop: 'reviewedby',
        dataType: 'SMCODELIST',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'HTMLTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}