/**
 * CreateForm 部件模型
 *
 * @export
 * @class CreateFormModel
 */
export default class CreateFormModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof CreateFormModel
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
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'ibzagentid',
        dataType: 'ACID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibzagentname',
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
        name: 'createmanname',
        prop: 'createmanname',
        dataType: 'TEXT',
      },
      {
        name: 'agentuser',
        prop: 'agentuser',
        dataType: 'TEXT',
      },
      {
        name: 'agentbegin',
        prop: 'agentbegin',
        dataType: 'DATE',
      },
      {
        name: 'agentend',
        prop: 'agentend',
        dataType: 'DATE',
      },
      {
        name: 'ibz_agentid',
        prop: 'ibzagentid',
        dataType: 'ACID',
      },
      {
        name: 'ibzagent',
        prop: 'ibzagentid',
        dataType: 'FONTKEY',
      },
    ]
  }

}