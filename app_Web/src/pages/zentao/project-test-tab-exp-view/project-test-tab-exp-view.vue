<template src="./project-test-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectTestTabExpViewBase } from './project-test-tab-exp-view-base';
import view_tabexppanel from '@widgets/project/test-tab-exp-viewtabexppanel-tabexppanel/test-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 项目分页导航视图（测试）视图
 *
 * @export
 * @class ProjectTestTabExpView
 * @extends {ProjectTestTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class ProjectTestTabExpView extends ProjectTestTabExpViewBase {}
</script>
