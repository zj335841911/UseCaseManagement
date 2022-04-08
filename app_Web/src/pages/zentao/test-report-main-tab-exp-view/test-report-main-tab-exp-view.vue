<template src="./test-report-main-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportMainTabExpViewBase } from './test-report-main-tab-exp-view-base';
import view_tabexppanel from '@widgets/test-report/main-tab-exp-viewtabexppanel-tabexppanel/main-tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 测试报告分页导航视图视图
 *
 * @export
 * @class TestReportMainTabExpView
 * @extends {TestReportMainTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportMainTabExpView extends TestReportMainTabExpViewBase {}
</script>
