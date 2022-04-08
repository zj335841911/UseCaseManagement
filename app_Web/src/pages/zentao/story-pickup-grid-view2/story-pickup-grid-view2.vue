<template src="./story-pickup-grid-view2.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPickupGridView2Base } from './story-pickup-grid-view2-base';
import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPickupGridView2
 * @extends {StoryPickupGridView2Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPickupGridView2 extends StoryPickupGridView2Base {}
</script>
