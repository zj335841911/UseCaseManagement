<template src="./project-stats-project-input-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectInputStatsGridViewBase } from './project-stats-project-input-stats-grid-view-base';
import view_grid from '@widgets/project-stats/project-input-stats-grid/project-input-stats-grid.vue';
import view_searchform from '@widgets/project-stats/project-input-stats-searchform/project-input-stats-searchform.vue';

/**
 * 项目统计表格视图视图
 *
 * @export
 * @class ProjectStatsProjectInputStatsGridView
 * @extends {ProjectStatsProjectInputStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectInputStatsGridView extends ProjectStatsProjectInputStatsGridViewBase {}
</script>
