export default {
  fields: {
    id: "主键",
    name: "任务名",
    taskcnt: "任务数",
    project: "项目编号",
    projectname: "项目",
    totaltaskcnt: "总任务数",
    totalleft: "总工时",
    left: "剩余工时",
    workload: "工作负载",
    assignedto: "指派给",
    dept: "部门",
    begin: "属性",
    end: "结束",
    workday: "工作日天数",
    assign: "是否指派",
  },
	views: {
		editview: {
			caption: "员工负载表",
      		title: "员工负载表编辑视图",
		},
		gridview: {
			caption: "员工负载表",
      		title: "员工负载表表格视图",
		},
	},
	main_form: {
		details: {
			group1: "员工负载表基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "主键", 
			srfmajortext: "任务名", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			id: "主键", 
		},
		uiactions: {
		},
	},
	main_grid: {
		nodata: "",
		columns: {
			assignedto: "姓名",
			projectname: "项目",
			taskcnt: "任务数",
			left: "剩余工时",
			totaltaskcnt: "总任务数",
			totalleft: "总工时",
			workload: "工作负载",
		},
		uiactions: {
		},
	},
	workload_searchform: {
		details: {
			formpage1: "表单分页", 
			dept: "部门", 
			begin: "起止时间", 
			end: "至", 
			workday: "工作天数", 
			everydaytime: "每天工时", 
			assign: "", 
		},
		uiactions: {
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "保存",
			tip: "保存",
		},
		tbitem4: {
			caption: "保存并新建",
			tip: "保存并新建",
		},
		tbitem5: {
			caption: "保存并关闭",
			tip: "保存并关闭",
		},
		tbitem7: {
			caption: "删除",
			tip: "删除",
		},
	},
};