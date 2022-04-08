<template src="./test-report-main-edit-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportMainEditEditViewBase } from './test-report-main-edit-edit-view-base';
import view_form from '@widgets/test-report/main-edit-form/main-edit-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportMainEditEditView
 * @extends {TestReportMainEditEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportMainEditEditView extends TestReportMainEditEditViewBase {}
</script>
