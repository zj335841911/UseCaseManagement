<template src="./story-related-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryRelatedGridBase } from './story-related-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class StoryRelatedGrid
 * @extends {StoryRelatedGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class StoryRelatedGrid extends StoryRelatedGridBase {}
</script>
