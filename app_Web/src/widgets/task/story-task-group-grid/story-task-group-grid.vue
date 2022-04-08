<template src="./story-task-group-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryTaskGroupGridBase } from './story-task-group-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class StoryTaskGroupGrid
 * @extends {StoryTaskGroupGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryTaskGroupGrid extends StoryTaskGroupGridBase {}
</script>
