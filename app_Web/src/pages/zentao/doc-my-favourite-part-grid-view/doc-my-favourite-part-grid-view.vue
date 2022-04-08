<template src="./doc-my-favourite-part-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMyFavouritePartGridViewBase } from './doc-my-favourite-part-grid-view-base';
import view_grid from '@widgets/doc/my-favourite-grid/my-favourite-grid.vue';

/**
 * 文档表格视图视图
 *
 * @export
 * @class DocMyFavouritePartGridView
 * @extends {DocMyFavouritePartGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DocMyFavouritePartGridView extends DocMyFavouritePartGridViewBase {}
</script>
