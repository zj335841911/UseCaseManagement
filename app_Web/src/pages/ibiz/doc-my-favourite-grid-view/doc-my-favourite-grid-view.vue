<template src="./doc-my-favourite-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMyFavouriteGridViewBase } from './doc-my-favourite-grid-view-base';
import view_grid from '@widgets/doc/more-my-favourite-grid/more-my-favourite-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocMyFavouriteGridView
 * @extends {DocMyFavouriteGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocMyFavouriteGridView extends DocMyFavouriteGridViewBase {}
</script>
