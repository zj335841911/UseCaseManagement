<template src="./employeeloadgrid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EMPLOYEELOADGridViewBase } from './employeeloadgrid-view-base';
import view_grid from '@widgets/emp-loyeeload/main-grid/main-grid.vue';
import view_searchform from '@widgets/emp-loyeeload/workload-searchform/workload-searchform.vue';

/**
 * 员工负载表表格视图视图
 *
 * @export
 * @class EMPLOYEELOADGridView
 * @extends {EMPLOYEELOADGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class EMPLOYEELOADGridView extends EMPLOYEELOADGridViewBase {}
</script>
