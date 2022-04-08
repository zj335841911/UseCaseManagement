<template src="./project-input-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectInputStatsGridBase } from './project-input-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectInputStatsGrid
 * @extends {ProjectInputStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectInputStatsGrid extends ProjectInputStatsGridBase {}
</script>
