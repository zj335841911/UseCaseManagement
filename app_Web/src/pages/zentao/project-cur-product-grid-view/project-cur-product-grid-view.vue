<template src="./project-cur-product-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectCurProductGridViewBase } from './project-cur-product-grid-view-base';
import view_grid from '@widgets/project/main-grid/main-grid.vue';
import view_searchbar from '@widgets/project/custom-searchbar/custom-searchbar.vue';

/**
 * project表格视图视图
 *
 * @export
 * @class ProjectCurProductGridView
 * @extends {ProjectCurProductGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectCurProductGridView extends ProjectCurProductGridViewBase {}
</script>
