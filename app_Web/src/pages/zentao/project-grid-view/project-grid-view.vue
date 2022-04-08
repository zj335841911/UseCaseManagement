<template src="./project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridViewBase } from './project-grid-view-base';
import view_grid from '@widgets/project/main-grid/main-grid.vue';
import view_searchbar from '@widgets/project/custom-searchbar/custom-searchbar.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectGridView
 * @extends {ProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridView extends ProjectGridViewBase {}
</script>
