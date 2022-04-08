/**
 * MyWorkPC 部件模型
 *
 * @export
 * @class MyWorkPCModel
 */
export default class MyWorkPCModel {

	/**
	 * 日历项类型
	 *
	 * @returns {any[]}
	 * @memberof MyWorkPCCalendarexpbar_calendarMode
	 */
	public itemType: string = "";

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof MyWorkPCCalendarexpbar_calendarMode
	 */
	public getDataItems(): any[] {
     let dataItems: any = [
          // 前端新增修改标识，新增为"0",修改为"1"或未设值
          {
            name: 'srffrontuf',
            prop: 'srffrontuf',
            dataType: 'TEXT',
          },
          {
            name: 'color',
          },
          {
            name: 'textColor',
          },
          {
            name: 'itemType',
          },
          {
            name: 'query',
            prop: 'query',
          },
      ];
      switch(this.itemType){
          case "Bug":
              dataItems = [...dataItems,
                  {
                    name: 'bug',
                    prop: 'id'
                  },
                  {
                    name: 'title',
                    prop: 'title'
                  },
                  {
                    name:'start',
                    prop:'assigneddate'
                  },
                  {
                    name:'end',
                    prop:'deadline'
                  },
              ];
              break;
          case "task":
              dataItems = [...dataItems,
                  {
                    name: 'task',
                    prop: 'id'
                  },
                  {
                    name: 'title',
                    prop: 'name'
                  },
                  {
                    name:'start',
                    prop:'assigneddate'
                  },
                  {
                    name:'end',
                    prop:'eststarted'
                  },
              ];
              break;
          case "todo":
              dataItems = [...dataItems,
                  {
                    name: 'todo',
                    prop: 'id'
                  },
                  {
                    name: 'title',
                    prop: 'name'
                  },
                  {
                    name:'start',
                    prop:'date'
                  },
                  {
                    name:'end',
                    prop:'date'
                  },
              ];
              break;
          case "daily":
              dataItems = [...dataItems,
                  {
                    name: 'ibzdaily',
                    prop: 'ibzdailyid'
                  },
                  {
                    name: 'title',
                    prop: 'ibzdailyname'
                  },
                  {
                    name:'start',
                    prop:'date'
                  },
                  {
                    name:'end',
                    prop:'submittime'
                  },
              ];
              break;
          case "reportly":
              dataItems = [...dataItems,
                  {
                    name: 'ibzreportly',
                    prop: 'ibzreportlyid'
                  },
                  {
                    name: 'title',
                    prop: 'ibzreportlyname'
                  },
                  {
                    name:'start',
                    prop:'date'
                  },
                  {
                    name:'end',
                    prop:'date'
                  },
              ];
              break;
          case "testtask":
              dataItems = [...dataItems,
                  {
                    name: 'testtask',
                    prop: 'id'
                  },
                  {
                    name: 'title',
                    prop: 'name'
                  },
                  {
                    name:'start',
                    prop:'begin'
                  },
                  {
                    name:'end',
                    prop:'end'
                  },
              ];
              break;
          case "Story":
              dataItems = [...dataItems,
                  {
                    name: 'story',
                    prop: 'id'
                  },
                  {
                    name: 'title',
                    prop: 'title'
                  },
                  {
                    name:'start',
                    prop:'assigneddate'
                  },
                  {
                    name:'end',
                    prop:'assigneddate'
                  },
              ];
              break;
      }
      return dataItems;
	}

}