<template src="./doc-more-my-favourites-tree-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMoreMyFavouritesTreeViewBase } from './doc-more-my-favourites-tree-view-base';
import view_tree from '@widgets/doc/more-my-favourites-tree-treeview/more-my-favourites-tree-treeview.vue';

/**
 * 文档树视图视图
 *
 * @export
 * @class DocMoreMyFavouritesTreeView
 * @extends {DocMoreMyFavouritesTreeViewBase}
 */
@Component({
    components: {
        view_tree, 
    }
})
@VueLifeCycleProcessing()
export default class DocMoreMyFavouritesTreeView extends DocMoreMyFavouritesTreeViewBase {}
</script>
