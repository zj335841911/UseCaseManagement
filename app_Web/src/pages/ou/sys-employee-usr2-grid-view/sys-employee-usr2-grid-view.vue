<template src="./sys-employee-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeUsr2GridViewBase } from './sys-employee-usr2-grid-view-base';
import view_grid from '@widgets/sys-employee/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-employee/default-searchform/default-searchform.vue';

/**
 * 人员表格视图人员实体表格视图(组织下所有人员)视图
 *
 * @export
 * @class SysEmployeeUsr2GridView
 * @extends {SysEmployeeUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeUsr2GridView extends SysEmployeeUsr2GridViewBase {}
</script>
