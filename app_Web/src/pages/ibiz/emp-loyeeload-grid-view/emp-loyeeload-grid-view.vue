<template src="./emp-loyeeload-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { EmpLoyeeloadGridViewBase } from './emp-loyeeload-grid-view-base';
import view_grid from '@widgets/emp-loyeeload/main-grid/main-grid.vue';
import view_searchform from '@widgets/emp-loyeeload/workload-searchform/workload-searchform.vue';

/**
 * 员工负载表表格视图视图
 *
 * @export
 * @class EmpLoyeeloadGridView
 * @extends {EmpLoyeeloadGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class EmpLoyeeloadGridView extends EmpLoyeeloadGridViewBase {}
</script>
