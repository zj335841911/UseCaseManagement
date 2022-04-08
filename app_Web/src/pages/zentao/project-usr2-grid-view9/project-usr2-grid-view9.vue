<template src="./project-usr2-grid-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectUsr2GridView9Base } from './project-usr2-grid-view9-base';
import view_grid from '@widgets/project/undone-project-grid/undone-project-grid.vue';

/**
 * 项目表格视图视图
 *
 * @export
 * @class ProjectUsr2GridView9
 * @extends {ProjectUsr2GridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectUsr2GridView9 extends ProjectUsr2GridView9Base { }
</script>
