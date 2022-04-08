<template src="./project-stats-project-quality-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsProjectQualityUsr2GridViewBase } from './project-stats-project-quality-usr2-grid-view-base';
import view_grid from '@widgets/project-stats/project-quality-grid/project-quality-grid.vue';

/**
 * 项目质量表视图
 *
 * @export
 * @class ProjectStatsProjectQualityUsr2GridView
 * @extends {ProjectStatsProjectQualityUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsProjectQualityUsr2GridView extends ProjectStatsProjectQualityUsr2GridViewBase {}
</script>
