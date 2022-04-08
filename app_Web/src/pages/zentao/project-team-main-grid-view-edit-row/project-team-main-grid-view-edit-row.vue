<template src="./project-team-main-grid-view-edit-row.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTeamMainGridView_EditRowBase } from './project-team-main-grid-view-edit-row-base';
import view_grid from '@widgets/project-team/main-edit-row-grid/main-edit-row-grid.vue';
import view_searchform from '@widgets/project-team/default-searchform/default-searchform.vue';

/**
 * 项目团队表格视图视图
 *
 * @export
 * @class ProjectTeamMainGridView_EditRow
 * @extends {ProjectTeamMainGridView_EditRowBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTeamMainGridView_EditRow extends ProjectTeamMainGridView_EditRowBase {}
</script>
