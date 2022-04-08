<template src="./project-team-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamMainGridViewBase } from './project-team-main-grid-view-base';
import view_grid from '@widgets/project-team/main-grid/main-grid.vue';
import view_searchbar from '@widgets/project-team/custom-searchbar/custom-searchbar.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class ProjectTeamMainGridView
 * @extends {ProjectTeamMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamMainGridView extends ProjectTeamMainGridViewBase {}
</script>
