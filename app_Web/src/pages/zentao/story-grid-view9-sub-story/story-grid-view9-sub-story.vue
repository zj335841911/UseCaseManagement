<template src="./story-grid-view9-sub-story.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryGridView9_SubStoryBase } from './story-grid-view9-sub-story-base';
import view_grid from '@widgets/story/main3-grid/main3-grid.vue';

/**
 * 子需求视图
 *
 * @export
 * @class StoryGridView9_SubStory
 * @extends {StoryGridView9_SubStoryBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryGridView9_SubStory extends StoryGridView9_SubStoryBase {}
</script>
