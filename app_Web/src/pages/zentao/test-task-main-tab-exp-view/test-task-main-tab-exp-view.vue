<template src="./test-task-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskMainTabExpViewBase } from './test-task-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/test-task/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 测试版本分页导航视图视图
 *
 * @export
 * @class TestTaskMainTabExpView
 * @extends {TestTaskMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskMainTabExpView extends TestTaskMainTabExpViewBase {}
</script>
