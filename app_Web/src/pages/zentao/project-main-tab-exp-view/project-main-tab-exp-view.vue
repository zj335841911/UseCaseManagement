<template src="./project-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMainTabExpViewBase } from './project-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/project/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 项目视图
 *
 * @export
 * @class ProjectMainTabExpView
 * @extends {ProjectMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectMainTabExpView extends ProjectMainTabExpViewBase {}
</script>
