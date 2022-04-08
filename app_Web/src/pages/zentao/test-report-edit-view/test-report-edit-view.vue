<template src="./test-report-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditViewBase } from './test-report-edit-view-base';
import view_form from '@widgets/test-report/main-form/main-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView
 * @extends {TestReportEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView extends TestReportEditViewBase {}
</script>
