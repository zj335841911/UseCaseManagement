<template src="./project-stats-project-bug-type-sum-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectBugTypeSumUsr2GridViewBase } from './project-stats-project-bug-type-sum-usr2-grid-view-base';
import view_grid from '@widgets/project-stats/project-bug-type-sum-grid/project-bug-type-sum-grid.vue';

/**
 * 项目bug类型统计表格视图视图
 *
 * @export
 * @class ProjectStatsProjectBugTypeSumUsr2GridView
 * @extends {ProjectStatsProjectBugTypeSumUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectBugTypeSumUsr2GridView extends ProjectStatsProjectBugTypeSumUsr2GridViewBase {}
</script>
