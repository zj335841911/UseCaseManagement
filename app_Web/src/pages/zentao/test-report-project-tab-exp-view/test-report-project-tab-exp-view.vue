<template src="./test-report-project-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportProjectTabExpViewBase } from './test-report-project-tab-exp-view-base';
import view_tabexppanel from '@widgets/test-report/project-tab-exp-viewtabexppanel-tabexppanel/project-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 测试报告分页导航视图视图
 *
 * @export
 * @class TestReportProjectTabExpView
 * @extends {TestReportProjectTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportProjectTabExpView extends TestReportProjectTabExpViewBase {}
</script>
