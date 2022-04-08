<template src="./project-usr3-grid-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectUsr3GridView9Base } from './project-usr3-grid-view9-base';
import view_grid from '@widgets/project/undone-project-grid/undone-project-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectUsr3GridView9
 * @extends {ProjectUsr3GridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectUsr3GridView9 extends ProjectUsr3GridView9Base { }
</script>
