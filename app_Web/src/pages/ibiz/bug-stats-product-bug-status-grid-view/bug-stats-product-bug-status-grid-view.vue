<template src="./bug-stats-product-bug-status-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsProductBugStatusGridViewBase } from './bug-stats-product-bug-status-grid-view-base';
import view_grid from '@widgets/bug-stats/product-bug-status-count-grid/product-bug-status-count-grid.vue';
import view_searchform from '@widgets/bug-stats/product-bug-searchform/product-bug-searchform.vue';

/**
 * Bug统计表格视图视图
 *
 * @export
 * @class BugStatsProductBugStatusGridView
 * @extends {BugStatsProductBugStatusGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsProductBugStatusGridView extends BugStatsProductBugStatusGridViewBase {}
</script>
