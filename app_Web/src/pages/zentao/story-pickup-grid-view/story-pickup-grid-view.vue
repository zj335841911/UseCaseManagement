<template src="./story-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPickupGridViewBase } from './story-pickup-grid-view-base';
import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPickupGridView
 * @extends {StoryPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPickupGridView extends StoryPickupGridViewBase {}
</script>
