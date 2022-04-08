<template src="./bug-stats-product-bug-resolution-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsProductBugResolutionGridViewBase } from './bug-stats-product-bug-resolution-grid-view-base';
import view_grid from '@widgets/bug-stats/product-bug-resolution-stats-grid/product-bug-resolution-stats-grid.vue';
import view_searchform from '@widgets/bug-stats/product-bug-searchform/product-bug-searchform.vue';

/**
 * Bug统计表格视图视图
 *
 * @export
 * @class BugStatsProductBugResolutionGridView
 * @extends {BugStatsProductBugResolutionGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsProductBugResolutionGridView extends BugStatsProductBugResolutionGridViewBase {}
</script>
