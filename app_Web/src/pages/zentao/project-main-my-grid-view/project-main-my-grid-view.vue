<template src="./project-main-my-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainMyGridViewBase } from './project-main-my-grid-view-base';
import view_grid from '@widgets/project/main-my-grid/main-my-grid.vue';
import view_searchbar from '@widgets/project/custom-searchbar/custom-searchbar.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectMainMyGridView
 * @extends {ProjectMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainMyGridView extends ProjectMainMyGridViewBase {}
</script>
