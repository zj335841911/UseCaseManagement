<template src="./project-story-status-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStoryStatusStatsGridBase } from './project-story-status-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectStoryStatusStatsGrid
 * @extends {ProjectStoryStatusStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStoryStatusStatsGrid extends ProjectStoryStatusStatsGridBase {}
</script>
