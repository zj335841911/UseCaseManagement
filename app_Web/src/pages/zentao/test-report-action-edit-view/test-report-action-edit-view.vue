<template src="./test-report-action-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportActionEditViewBase } from './test-report-action-edit-view-base';
import view_form from '@widgets/test-report/action-form/action-form.vue';

/**
 * 测试报告编辑视图（历史记录）视图
 *
 * @export
 * @class TestReportActionEditView
 * @extends {TestReportActionEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportActionEditView extends TestReportActionEditViewBase {}
</script>
