<template src="./test-report-project-main-info-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportProjectMainInfoViewBase } from './test-report-project-main-info-view-base';
import view_form from '@widgets/test-report/main-info-form/main-info-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportProjectMainInfoView
 * @extends {TestReportProjectMainInfoViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportProjectMainInfoView extends TestReportProjectMainInfoViewBase {}
</script>
