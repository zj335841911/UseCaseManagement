<template src="./story-pickup-grid-view4.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryPickupGridView4Base } from './story-pickup-grid-view4-base';
import view_grid from '@widgets/story/pickup-grid-grid/pickup-grid-grid.vue';

/**
 * 需求视图
 *
 * @export
 * @class StoryPickupGridView4
 * @extends {StoryPickupGridView4Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class StoryPickupGridView4 extends StoryPickupGridView4Base {}
</script>
