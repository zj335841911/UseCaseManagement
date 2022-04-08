<template src="./story-main-grid-view-by-module.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainGridView_ByModuleBase } from './story-main-grid-view-by-module-base';
import view_grid from '@widgets/story/tree-main-grid/tree-main-grid.vue';
import view_searchbar from '@widgets/story/custom-searchbar/custom-searchbar.vue';

/**
 * story表格视图视图
 *
 * @export
 * @class StoryMainGridView_ByModule
 * @extends {StoryMainGridView_ByModuleBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainGridView_ByModule extends StoryMainGridView_ByModuleBase {}
</script>
