<template src="./project-weekly-main-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectWeeklyMainGridBase } from './project-weekly-main-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectWeeklyMainGrid
 * @extends {ProjectWeeklyMainGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectWeeklyMainGrid extends ProjectWeeklyMainGridBase {}
</script>
