<template src="./bug-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsGridViewBase } from './bug-stats-grid-view-base';
import view_grid from '@widgets/bug-stats/main-grid/main-grid.vue';
import view_searchform from '@widgets/bug-stats/default-searchform/default-searchform.vue';

/**
 * Bug统计表格视图视图
 *
 * @export
 * @class BugStatsGridView
 * @extends {BugStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsGridView extends BugStatsGridViewBase {}
</script>
