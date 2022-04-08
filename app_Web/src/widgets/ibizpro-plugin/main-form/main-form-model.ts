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
        prop: 'updatedate',
        dataType: 'DATETIME',
      },
      {
        name: 'srforikey',
      },
      {
        name: 'srfkey',
        prop: 'ibizpropluginid',
        dataType: 'GUID',
      },
      {
        name: 'srfmajortext',
        prop: 'ibizpropluginname',
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
        name: 'ibizpro_pluginname',
        prop: 'ibizpropluginname',
        dataType: 'TEXT',
      },
      {
        name: 'version',
        prop: 'version',
        dataType: 'INT',
      },
      {
        name: 'type',
        prop: 'type',
        dataType: 'SSCODELIST',
      },
      {
        name: 'downloadurl',
        prop: 'downloadurl',
        dataType: 'TEXT',
      },
      {
        name: 'tag',
        prop: 'tag',
        dataType: 'SMCODELIST',
      },
      {
        name: 'keyword',
        prop: 'keyword',
        dataType: 'SMCODELIST',
      },
      {
        name: 'ibizpro_pluginid',
        prop: 'ibizpropluginid',
        dataType: 'GUID',
      },
      {
        name: 'ibizproplugin',
        prop: 'ibizpropluginid',
        dataType: 'FONTKEY',
      },
    ]
  }

}