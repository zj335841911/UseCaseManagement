<template src="./test-report-edit-view-r.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditView_RBase } from './test-report-edit-view-r-base';
import view_form from '@widgets/test-report/main-form/main-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView_R
 * @extends {TestReportEditView_RBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView_R extends TestReportEditView_RBase {}
</script>
