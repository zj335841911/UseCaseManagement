<template src="./sys-department-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysDepartmentGridExpViewBase } from './sys-department-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-department/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 部门表格导航视图视图
 *
 * @export
 * @class SysDepartmentGridExpView
 * @extends {SysDepartmentGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysDepartmentGridExpView extends SysDepartmentGridExpViewBase {}
</script>
