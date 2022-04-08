<template src="./branch-pmgrid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPMGridViewBase } from './branch-pmgrid-view-base';
import view_grid from '@widgets/branch/platform-management-grid/platform-management-grid.vue';
import view_searchbar from '@widgets/branch/custom-searchbar/custom-searchbar.vue';

/**
 * 平台管理视图
 *
 * @export
 * @class BranchPMGridView
 * @extends {BranchPMGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BranchPMGridView extends BranchPMGridViewBase {}
</script>
