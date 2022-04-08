<template src="./case-test-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTestOptionViewBase } from './case-test-option-view-base';
import view_form from '@widgets/case/main-test-task-form/main-test-task-form.vue';

/**
 * 执行视图
 *
 * @export
 * @class CaseTestOptionView
 * @extends {CaseTestOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseTestOptionView extends CaseTestOptionViewBase {}
</script>
