<template src="./project-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectGridExpViewBase } from './project-grid-exp-view-base';
import view_gridexpbar from '@widgets/project/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 项目表格导航视图视图
 *
 * @export
 * @class ProjectGridExpView
 * @extends {ProjectGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectGridExpView extends ProjectGridExpViewBase {}
</script>
