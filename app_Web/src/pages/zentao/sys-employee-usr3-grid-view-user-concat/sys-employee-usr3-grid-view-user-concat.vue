<template src="./sys-employee-usr3-grid-view-user-concat.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeUsr3GridViewUserConcatBase } from './sys-employee-usr3-grid-view-user-concat-base';
import view_grid from '@widgets/sys-employee/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-employee/default-searchform/default-searchform.vue';

/**
 * 人员表格视图视图
 *
 * @export
 * @class SysEmployeeUsr3GridViewUserConcat
 * @extends {SysEmployeeUsr3GridViewUserConcatBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeUsr3GridViewUserConcat extends SysEmployeeUsr3GridViewUserConcatBase {}
</script>
