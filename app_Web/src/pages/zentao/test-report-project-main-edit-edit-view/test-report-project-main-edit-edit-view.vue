<template src="./test-report-project-main-edit-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportProjectMainEditEditViewBase } from './test-report-project-main-edit-edit-view-base';
import view_form from '@widgets/test-report/main-edit-form/main-edit-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportProjectMainEditEditView
 * @extends {TestReportProjectMainEditEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportProjectMainEditEditView extends TestReportProjectMainEditEditViewBase {}
</script>
