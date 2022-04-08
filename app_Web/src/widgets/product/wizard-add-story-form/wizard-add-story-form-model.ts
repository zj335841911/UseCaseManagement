/**
 * WizardAddStory 部件模型
 *
 * @export
 * @class WizardAddStoryModel
 */
export default class WizardAddStoryModel {

  /**
  * 获取数据项集合
  *
  * @returns {any[]}
  * @memberof WizardAddStoryModel
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
        name: 'formitem',
      },
      {
        name: 'formitem1',
      },
      {
        name: 'formitem2',
      },
      {
        name: 'formitem3',
      },
      {
        name: 'formitem4',
      },
      {
        name: 'formitem5',
      },
      {
        name: 'formitem6',
      },
      {
        name: 'formitem7',
      },
      {
        name: 'formitem8',
      },
      {
        name: 'formitem9',
      },
      {
        name: 'formitem10',
      },
      {
        name: 'formitem11',
      },
      {
        name: 'formitem12',
      },
      {
        name: 'formitem13',
      },
      {
        name: 'formitem14',
      },
      {
        name: 'id',
        prop: 'id',
        dataType: 'ACID',
      },
      {
        name: 'product',
        prop: 'id',
        dataType: 'FONTKEY',
      },
    ]
  }

}