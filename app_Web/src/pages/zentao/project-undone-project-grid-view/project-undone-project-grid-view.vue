<template src="./project-undone-project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectUndoneProjectGridViewBase } from './project-undone-project-grid-view-base';
import view_grid from '@widgets/project/undone-project-grid/undone-project-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectUndoneProjectGridView
 * @extends {ProjectUndoneProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectUndoneProjectGridView extends ProjectUndoneProjectGridViewBase {}
</script>
