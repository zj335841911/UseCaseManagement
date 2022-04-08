<template src="./test-report-edit-view-test-range.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditView_TestRangeBase } from './test-report-edit-view-test-range-base';
import view_form from '@widgets/test-report/test-range-form/test-range-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView_TestRange
 * @extends {TestReportEditView_TestRangeBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView_TestRange extends TestReportEditView_TestRangeBase {}
</script>
