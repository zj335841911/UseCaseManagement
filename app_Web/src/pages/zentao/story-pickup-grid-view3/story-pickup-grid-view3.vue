<template src="./story-pickup-grid-view3.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPickupGridView3Base } from './story-pickup-grid-view3-base';
import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPickupGridView3
 * @extends {StoryPickupGridView3Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPickupGridView3 extends StoryPickupGridView3Base {}
</script>
