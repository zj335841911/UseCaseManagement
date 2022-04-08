<template src="./story-grid-view9-child.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryGridView9_ChildBase } from './story-grid-view9-child-base';
import view_grid from '@widgets/story/story-related-grid/story-related-grid.vue';

/**
 * 细分需求视图
 *
 * @export
 * @class StoryGridView9_Child
 * @extends {StoryGridView9_ChildBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryGridView9_Child extends StoryGridView9_ChildBase {}
</script>
