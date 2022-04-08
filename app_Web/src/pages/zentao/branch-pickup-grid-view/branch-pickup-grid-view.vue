<template src="./branch-pickup-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPickupGridViewBase } from './branch-pickup-grid-view-base';
import view_grid from '@widgets/branch/main-grid/main-grid.vue';
import view_searchform from '@widgets/branch/default-searchform/default-searchform.vue';

/**
 * 平台选择表格视图视图
 *
 * @export
 * @class BranchPickupGridView
 * @extends {BranchPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BranchPickupGridView extends BranchPickupGridViewBase { }
</script>
