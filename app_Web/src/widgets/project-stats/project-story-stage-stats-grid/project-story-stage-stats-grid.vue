<template src="./project-story-stage-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStoryStageStatsGridBase } from './project-story-stage-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectStoryStageStatsGrid
 * @extends {ProjectStoryStageStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStoryStageStatsGrid extends ProjectStoryStageStatsGridBase {}
</script>
