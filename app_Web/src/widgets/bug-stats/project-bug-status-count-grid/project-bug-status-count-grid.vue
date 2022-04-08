<template src="./project-bug-status-count-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectBugStatusCountGridBase } from './project-bug-status-count-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectBugStatusCountGrid
 * @extends {ProjectBugStatusCountGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectBugStatusCountGrid extends ProjectBugStatusCountGridBase {}
</script>
