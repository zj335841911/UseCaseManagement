<template src="./story-my-favorites-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMyFavoritesGridViewBase } from './story-my-favorites-grid-view-base';
import view_grid from '@widgets/story/my-favorite-main-grid/my-favorite-main-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMyFavoritesGridView
 * @extends {StoryMyFavoritesGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMyFavoritesGridView extends StoryMyFavoritesGridViewBase {}
</script>
