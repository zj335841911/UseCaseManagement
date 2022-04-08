<template src="./project-daily-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectDailyMainGridBase } from './project-daily-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectDailyMainGrid
 * @extends {ProjectDailyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectDailyMainGrid extends ProjectDailyMainGridBase {}
</script>
