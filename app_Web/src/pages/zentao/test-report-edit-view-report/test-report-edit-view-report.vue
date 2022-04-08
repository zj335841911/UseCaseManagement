<template src="./test-report-edit-view-report.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditView_ReportBase } from './test-report-edit-view-report-base';
import view_form from '@widgets/test-report/report-form/report-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView_Report
 * @extends {TestReportEditView_ReportBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView_Report extends TestReportEditView_ReportBase { }
</script>
