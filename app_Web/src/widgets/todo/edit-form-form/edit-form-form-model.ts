/**
 * EditForm 部件模型
 *
 * @export
 * @class EditFormModel
 */
export default class EditFormModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof EditFormModel
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
        name: 'date',
        prop: 'date',
        dataType: 'DATE',
      },
      {
        name: 'cycle',
        prop: 'cycle',
        dataType: 'INT',
      },
      {
        name: 'config_type',
        prop: 'config_type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'config_day',
        prop: 'config_day',
        dataType: 'INT',
      },
      {
        name: 'config_week',
        prop: 'config_week',
        dataType: 'SMCODELIST',
      },
      {
        name: 'config_month',
        prop: 'config_month',
        dataType: 'SMCODELIST',
      },
      {
        name: 'idvalue',
        prop: 'idvalue',
        dataType: 'BIGINT',
      },
      {
        name: 'config_beforedays',
        prop: 'config_beforedays',
        dataType: 'INT',
      },
      {
        name: 'formitem',
      },
      {
        name: 'config_end',
        prop: 'config_end',
        dataType: 'DATE',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'TEXT',
      },
      {
        name: 'story',
        prop: 'story',
        dataType: 'TEXT',
      },
      {
        name: 'bug',
        prop: 'bug',
        dataType: 'TEXT',
      },
      {
        name: 'task',
        prop: 'task',
        dataType: 'TEXT',
      },
      {
        name: 'pri',
        prop: 'pri',
        dataType: 'INT',
      },
      {
        name: 'name',
        prop: 'name',
        dataType: 'TEXT',
      },
      {
        name: 'desc',
        prop: 'desc',
        dataType: 'LONGTEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'NSCODELIST',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'NSCODELIST',
      },
      {
        name: 'formitem10',
      },
      {
        name: 'private',
        prop: 'ibizprivate',
        dataType: 'SMCODELIST',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'todo',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}