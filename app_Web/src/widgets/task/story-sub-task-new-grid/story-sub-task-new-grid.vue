<template src="./story-sub-task-new-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySubTaskNewGridBase } from './story-sub-task-new-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class StorySubTaskNewGrid
 * @extends {StorySubTaskNewGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StorySubTaskNewGrid extends StorySubTaskNewGridBase {}
</script>
