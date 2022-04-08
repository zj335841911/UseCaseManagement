<template src="./bug-stats-assignto-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsAssigntoGridViewBase } from './bug-stats-assignto-grid-view-base';
import view_grid from '@widgets/bug-stats/bugassigned-to-grid/bugassigned-to-grid.vue';
import view_searchform from '@widgets/bug-stats/assigned-tobug-searchform/assigned-tobug-searchform.vue';

/**
 * Bug统计表格视图（Bug指派表）视图
 *
 * @export
 * @class BugStatsAssigntoGridView
 * @extends {BugStatsAssigntoGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsAssigntoGridView extends BugStatsAssigntoGridViewBase {}
</script>
