<template src="./project-task-status-count-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTaskStatusCountGridBase } from './project-task-status-count-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectTaskStatusCountGrid
 * @extends {ProjectTaskStatusCountGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectTaskStatusCountGrid extends ProjectTaskStatusCountGridBase {}
</script>
