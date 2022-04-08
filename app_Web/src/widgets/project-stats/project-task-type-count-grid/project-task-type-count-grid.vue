<template src="./project-task-type-count-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTaskTypeCountGridBase } from './project-task-type-count-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectTaskTypeCountGrid
 * @extends {ProjectTaskTypeCountGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTaskTypeCountGrid extends ProjectTaskTypeCountGridBase {}
</script>
