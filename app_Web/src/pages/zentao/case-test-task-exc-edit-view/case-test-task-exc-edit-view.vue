<template src="./case-test-task-exc-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTestTaskExcEditViewBase } from './case-test-task-exc-edit-view-base';
import view_form from '@widgets/case/test-task-rmain-form/test-task-rmain-form.vue';

/**
 * 执行结果视图
 *
 * @export
 * @class CaseTestTaskExcEditView
 * @extends {CaseTestTaskExcEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseTestTaskExcEditView extends CaseTestTaskExcEditViewBase {}
</script>
