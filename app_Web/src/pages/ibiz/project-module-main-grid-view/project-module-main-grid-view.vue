<template src="./project-module-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectModuleMainGridViewBase } from './project-module-main-grid-view-base';
import view_grid from '@widgets/project-module/main-grid/main-grid.vue';

/**
 * 实体表格视图视图
 *
 * @export
 * @class ProjectModuleMainGridView
 * @extends {ProjectModuleMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectModuleMainGridView extends ProjectModuleMainGridViewBase {}
</script>
