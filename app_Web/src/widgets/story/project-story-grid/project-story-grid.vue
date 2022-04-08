<template src="./project-story-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStoryGridBase } from './project-story-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class ProjectStoryGrid
 * @extends {ProjectStoryGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class ProjectStoryGrid extends ProjectStoryGridBase {}
</script>
