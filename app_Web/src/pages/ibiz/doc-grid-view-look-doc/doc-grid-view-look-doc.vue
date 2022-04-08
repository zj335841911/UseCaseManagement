<template src="./doc-grid-view-look-doc.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridViewLookDocBase } from './doc-grid-view-look-doc-base';
import view_grid from '@widgets/doc/main-grid/main-grid.vue';
import view_searchbar from '@widgets/doc/custom-searchbar/custom-searchbar.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridViewLookDoc
 * @extends {DocGridViewLookDocBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridViewLookDoc extends DocGridViewLookDocBase {}
</script>
