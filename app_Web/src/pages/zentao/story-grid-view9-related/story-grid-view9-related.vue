<template src="./story-grid-view9-related.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryGridView9_RelatedBase } from './story-grid-view9-related-base';
import view_grid from '@widgets/story/story-related-grid/story-related-grid.vue';

/**
 * 相关需求视图
 *
 * @export
 * @class StoryGridView9_Related
 * @extends {StoryGridView9_RelatedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryGridView9_Related extends StoryGridView9_RelatedBase {}
</script>
