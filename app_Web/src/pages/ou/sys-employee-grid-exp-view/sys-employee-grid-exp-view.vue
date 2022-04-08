<template src="./sys-employee-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeeGridExpViewBase } from './sys-employee-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-employee/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 人员表格导航视图视图
 *
 * @export
 * @class SysEmployeeGridExpView
 * @extends {SysEmployeeGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeeGridExpView extends SysEmployeeGridExpViewBase {}
</script>
