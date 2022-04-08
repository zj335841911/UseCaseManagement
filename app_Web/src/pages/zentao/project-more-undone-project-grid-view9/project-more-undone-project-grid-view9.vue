<template src="./project-more-undone-project-grid-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMoreUndoneProjectGridView9Base } from './project-more-undone-project-grid-view9-base';
import view_grid from '@widgets/project/undone-project-grid/undone-project-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectMoreUndoneProjectGridView9
 * @extends {ProjectMoreUndoneProjectGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMoreUndoneProjectGridView9 extends ProjectMoreUndoneProjectGridView9Base { }
</script>
