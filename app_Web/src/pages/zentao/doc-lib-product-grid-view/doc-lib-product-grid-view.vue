<template src="./doc-lib-product-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductGridViewBase } from './doc-lib-product-grid-view-base';
import view_grid from '@widgets/doc-lib/product-main-grid/product-main-grid.vue';
import view_searchbar from '@widgets/doc-lib/custom-searchbar/custom-searchbar.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibProductGridView
 * @extends {DocLibProductGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductGridView extends DocLibProductGridViewBase {}
</script>
