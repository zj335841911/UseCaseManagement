/**
 * AddComment 部件模型
 *
 * @export
 * @class AddCommentModel
 */
export default class AddCommentModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof AddCommentModel
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
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'comment',
        dataType: 'LONGTEXT',
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
        name: 'objecttype',
        prop: 'objecttype',
        dataType: 'SSCODELIST',
      },
      {
        name: 'objectid',
        prop: 'objectid',
        dataType: 'BIGINT',
      },
      {
        name: 'comment',
        prop: 'comment',
        dataType: 'LONGTEXT',
      },
      {
        name: 'files',
        prop: 'files',
        dataType: 'LONGTEXT',
      },
      {
        name: 'noticeusers',
        prop: 'noticeusers',
        dataType: 'TEXT',
      },
      {
        name: 'extra',
        prop: 'extra',
        dataType: 'LONGTEXT',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'action',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}