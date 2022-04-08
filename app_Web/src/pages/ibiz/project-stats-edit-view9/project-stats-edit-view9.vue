<template src="./project-stats-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectStatsEditView9Base } from './project-stats-edit-view9-base';
import view_form from '@widgets/project-stats/main-form/main-form.vue';

/**
 * 项目统计编辑视图视图
 *
 * @export
 * @class ProjectStatsEditView9
 * @extends {ProjectStatsEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectStatsEditView9 extends ProjectStatsEditView9Base {}
</script>
