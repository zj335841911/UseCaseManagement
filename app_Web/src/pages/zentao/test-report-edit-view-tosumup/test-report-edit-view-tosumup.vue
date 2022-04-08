<template src="./test-report-edit-view-tosumup.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportEditView_tosumupBase } from './test-report-edit-view-tosumup-base';
import view_form from '@widgets/test-report/tosumup-form/tosumup-form.vue';

/**
 * 测试报告编辑视图视图
 *
 * @export
 * @class TestReportEditView_tosumup
 * @extends {TestReportEditView_tosumupBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportEditView_tosumup extends TestReportEditView_tosumupBase {}
</script>
