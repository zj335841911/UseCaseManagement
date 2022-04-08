/**
 * TypeGantt 部件模型
 *
 * @export
 * @class TypeGanttModel
 */
export default class TypeGanttModel {

	/**
	 * 日历项类型
	 *
	 * @returns {any[]}
	 * @memberof TypeGanttGanttMode
	 */
	public itemType: string = "";

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TypeGanttGanttMode
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
            name: 'style',
          },
          {
            name: 'textColor',
          },
          {
            name: 'itemType',
          },
          {
            name: 'parentId'
          },
          {
            name: 'query',
            prop: 'query',
          },
      ];
      switch(this.itemType){
          case "TaskTypes":
              dataItems = [...dataItems,
                  {
                    name: 'id',
                    prop: 'type'
                  },
                  {
                    name: 'end',
                    prop: 'deadline'
                  },
                  {
                    name: 'assignedto',
                    prop: 'assignedto'
                  },
                  {
                    name: 'start',
                    prop: 'eststarted'
                  },
                  {
                    name: 'text',
                    prop: 'type'
                  },
                  {
                    name: 'taskduration',
                    prop: 'duration'
                  },
              ];
              break;
          case "ChildTasks":
              dataItems = [...dataItems,
                  {
                    name: 'id',
                    prop: 'id'
                  },
                  {
                    name: 'taskduration',
                    prop: 'duration'
                  },
                  {
                    name: 'text',
                    prop: 'name'
                  },
                  {
                    name: 'end',
                    prop: 'deadline'
                  },
                  {
                    name: 'assignedto',
                    prop: 'assignedto'
                  },
                  {
                    name: 'start',
                    prop: 'eststarted'
                  },
              ];
              break;
          case "Tasks":
              dataItems = [...dataItems,
                  {
                    name: 'id',
                    prop: 'id'
                  },
                  {
                    name: 'assignedto',
                    prop: 'assignedto'
                  },
                  {
                    name: 'start',
                    prop: 'eststarted'
                  },
                  {
                    name: 'taskduration',
                    prop: 'duration'
                  },
                  {
                    name: 'text',
                    prop: 'name'
                  },
                  {
                    name: 'end',
                    prop: 'deadline'
                  },
              ];
              break;
      }
      return dataItems;
	}

}