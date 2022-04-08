<template src="./project-stats-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsGridView9Base } from './project-stats-grid-view9-base';
import view_grid from '@widgets/project-stats/not-close-project-grid/not-close-project-grid.vue';

/**
 * 项目统计表格视图视图
 *
 * @export
 * @class ProjectStatsGridView9
 * @extends {ProjectStatsGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsGridView9 extends ProjectStatsGridView9Base {}
</script>
