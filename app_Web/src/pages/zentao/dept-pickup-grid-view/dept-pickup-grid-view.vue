<template src="./dept-pickup-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DeptPickupGridViewBase } from './dept-pickup-grid-view-base';
import view_grid from '@widgets/dept/main-grid/main-grid.vue';
import view_searchform from '@widgets/dept/default-searchform/default-searchform.vue';

/**
 * 部门选择表格视图视图
 *
 * @export
 * @class DeptPickupGridView
 * @extends {DeptPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DeptPickupGridView extends DeptPickupGridViewBase { }
</script>
