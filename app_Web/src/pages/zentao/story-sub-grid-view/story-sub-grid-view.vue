<template src="./story-sub-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StorySubGridViewBase } from './story-sub-grid-view-base';
import view_grid from '@widgets/sub-story/sub-story-new-grid/sub-story-new-grid.vue';

/**
 * 需求细分视图
 *
 * @export
 * @class StorySubGridView
 * @extends {StorySubGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StorySubGridView extends StorySubGridViewBase {}
</script>
