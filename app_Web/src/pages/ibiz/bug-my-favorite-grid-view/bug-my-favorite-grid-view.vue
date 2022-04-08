<template src="./bug-my-favorite-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMyFavoriteGridViewBase } from './bug-my-favorite-grid-view-base';
import view_grid from '@widgets/bug/favorite-main-grid/favorite-main-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugMyFavoriteGridView
 * @extends {BugMyFavoriteGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugMyFavoriteGridView extends BugMyFavoriteGridViewBase {}
</script>
