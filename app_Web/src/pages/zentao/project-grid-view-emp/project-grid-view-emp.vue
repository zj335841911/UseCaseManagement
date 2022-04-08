<template src="./project-grid-view-emp.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridViewEMpBase } from './project-grid-view-emp-base';
import view_grid from '@widgets/project/main-concat-grid/main-concat-grid.vue';
import view_searchbar from '@widgets/project/custom-searchbar/custom-searchbar.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectGridViewEMp
 * @extends {ProjectGridViewEMpBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridViewEMp extends ProjectGridViewEMpBase {}
</script>
