<template src="./project-module-quick-cfg-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectModuleQuickCfgViewBase } from './project-module-quick-cfg-view-base';
import view_form from '@widgets/project-module/main-form/main-form.vue';

/**
 * 任务模块视图
 *
 * @export
 * @class ProjectModuleQuickCfgView
 * @extends {ProjectModuleQuickCfgViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectModuleQuickCfgView extends ProjectModuleQuickCfgViewBase {}
</script>
