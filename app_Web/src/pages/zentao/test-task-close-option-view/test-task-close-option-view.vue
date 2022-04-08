<template src="./test-task-close-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskCloseOptionViewBase } from './test-task-close-option-view-base';
import view_form from '@widgets/test-task/close-form/close-form.vue';

/**
 * 关闭视图
 *
 * @export
 * @class TestTaskCloseOptionView
 * @extends {TestTaskCloseOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskCloseOptionView extends TestTaskCloseOptionViewBase {}
</script>
