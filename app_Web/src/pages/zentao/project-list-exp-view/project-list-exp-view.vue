<template src="./project-list-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectListExpViewBase } from './project-list-exp-view-base';
import view_listexpbar from '@widgets/project/list-exp-viewlistexpbar-listexpbar/list-exp-viewlistexpbar-listexpbar.vue';

/**
 * 项目列表导航视图视图
 *
 * @export
 * @class ProjectListExpView
 * @extends {ProjectListExpViewBase}
 */
@Component({
    components: {
        view_listexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectListExpView extends ProjectListExpViewBase {}
</script>
