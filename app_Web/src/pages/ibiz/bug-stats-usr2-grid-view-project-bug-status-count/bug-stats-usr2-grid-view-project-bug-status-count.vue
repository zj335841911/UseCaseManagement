<template src="./bug-stats-usr2-grid-view-project-bug-status-count.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsUsr2GridViewProjectBugStatusCountBase } from './bug-stats-usr2-grid-view-project-bug-status-count-base';
import view_grid from '@widgets/bug-stats/project-bug-status-count-grid/project-bug-status-count-grid.vue';
import view_searchform from '@widgets/bug-stats/default-searchform/default-searchform.vue';

/**
 * Bug统计表格视图(bug状态统计)视图
 *
 * @export
 * @class BugStatsUsr2GridViewProjectBugStatusCount
 * @extends {BugStatsUsr2GridViewProjectBugStatusCountBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsUsr2GridViewProjectBugStatusCount extends BugStatsUsr2GridViewProjectBugStatusCountBase {}
</script>
