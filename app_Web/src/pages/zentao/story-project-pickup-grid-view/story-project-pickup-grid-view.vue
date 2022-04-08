<template src="./story-project-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryProjectPickupGridViewBase } from './story-project-pickup-grid-view-base';
import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryProjectPickupGridView
 * @extends {StoryProjectPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryProjectPickupGridView extends StoryProjectPickupGridViewBase {}
</script>
