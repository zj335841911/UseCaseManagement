/**
 * Main 部件模型
 *
 * @export
 * @class MainModel
 */
export default class MainModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof MainModel
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
        name: 'prodoctname',
        prop: 'productname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'branch',
        prop: 'branch',
        dataType: 'PICKUP',
      },
      {
        name: 'branchname',
        prop: 'branchname',
        dataType: 'PICKUPTEXT',
      },
      {
        name: 'modulename1',
        prop: 'modulename1',
        dataType: 'TEXT',
      },
      {
        name: 'plan',
        prop: 'plan',
        dataType: 'LONGTEXT',
      },
      {
        name: 'source',
        prop: 'source',
        dataType: 'SSCODELIST',
      },
      {
        name: 'sourcenote',
        prop: 'sourcenote',
        dataType: 'TEXT',
      },
      {
        name: 'status',
        prop: 'status',
        dataType: 'SSCODELIST',
      },
      {
        name: 'stage',
        prop: 'stage',
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
        name: 'keywords',
        prop: 'keywords',
        dataType: 'TEXT',
      },
      {
        name: 'mailto',
        prop: 'mailto',
        dataType: 'SMCODELIST',
      },
      {
        name: 'openedby',
        prop: 'openedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'openeddate',
        prop: 'openeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'assignedto',
        prop: 'assignedto',
        dataType: 'TEXT',
      },
      {
        name: 'assigneddate',
        prop: 'assigneddate',
        dataType: 'DATETIME',
      },
      {
        name: 'reviewedby',
        prop: 'reviewedby',
        dataType: 'SMCODELIST',
      },
      {
        name: 'revieweddate',
        prop: 'revieweddate',
        dataType: 'DATE',
      },
      {
        name: 'closedby',
        prop: 'closedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'closeddate',
        prop: 'closeddate',
        dataType: 'DATETIME',
      },
      {
        name: 'closedreason',
        prop: 'closedreason',
        dataType: 'SSCODELIST',
      },
      {
        name: 'lasteditedby',
        prop: 'lasteditedby',
        dataType: 'SSCODELIST',
      },
      {
        name: 'lastediteddate',
        prop: 'lastediteddate',
        dataType: 'DATETIME',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'product',
        prop: 'product',
        dataType: 'PICKUP',
      },
      {
        name: 'story',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}