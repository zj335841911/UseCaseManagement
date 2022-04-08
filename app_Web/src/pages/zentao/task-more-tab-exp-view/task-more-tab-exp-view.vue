<template src="./task-more-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskMoreTabExpViewBase } from './task-more-tab-exp-view-base';
import view_tabexppanel from '@widgets/task/more-tab-exp-viewtabexppanel-tabexppanel/more-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 任务分页导航视图（更多）视图
 *
 * @export
 * @class TaskMoreTabExpView
 * @extends {TaskMoreTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class TaskMoreTabExpView extends TaskMoreTabExpViewBase {}
</script>
