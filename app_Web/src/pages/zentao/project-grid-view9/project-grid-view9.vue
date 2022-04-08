<template src="./project-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridView9Base } from './project-grid-view9-base';
import view_grid from '@widgets/project/involved-project-grid/involved-project-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectGridView9
 * @extends {ProjectGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridView9 extends ProjectGridView9Base {}
</script>
