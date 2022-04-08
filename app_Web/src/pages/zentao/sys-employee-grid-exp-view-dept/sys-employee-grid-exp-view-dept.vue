<template src="./sys-employee-grid-exp-view-dept.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeGridExpViewDeptBase } from './sys-employee-grid-exp-view-dept-base';
import view_gridexpbar from '@widgets/sys-employee/grid-exp-view-deptgridexpbar-gridexpbar/grid-exp-view-deptgridexpbar-gridexpbar.vue';

/**
 * 人员表格导航视图视图
 *
 * @export
 * @class SysEmployeeGridExpViewDept
 * @extends {SysEmployeeGridExpViewDeptBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeGridExpViewDept extends SysEmployeeGridExpViewDeptBase {}
</script>
