<template src="./test-task-start-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskStartOptionViewBase } from './test-task-start-option-view-base';
import view_form from '@widgets/test-task/start-form/start-form.vue';

/**
 * 开始视图
 *
 * @export
 * @class TestTaskStartOptionView
 * @extends {TestTaskStartOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskStartOptionView extends TestTaskStartOptionViewBase {}
</script>
