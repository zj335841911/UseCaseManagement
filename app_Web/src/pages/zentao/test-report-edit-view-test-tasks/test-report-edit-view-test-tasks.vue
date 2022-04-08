<template src="./test-report-edit-view-test-tasks.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditView_TestTasksBase } from './test-report-edit-view-test-tasks-base';
import view_form from '@widgets/test-report/project-new-form/project-new-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView_TestTasks
 * @extends {TestReportEditView_TestTasksBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView_TestTasks extends TestReportEditView_TestTasksBase {}
</script>
