<template src="./sys-employee-usr3-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeUsr3GridViewBase } from './sys-employee-usr3-grid-view-base';
import view_grid from '@widgets/sys-employee/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-employee/default-searchform/default-searchform.vue';

/**
 * 人员表格视图视图
 *
 * @export
 * @class SysEmployeeUsr3GridView
 * @extends {SysEmployeeUsr3GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeUsr3GridView extends SysEmployeeUsr3GridViewBase {}
</script>
