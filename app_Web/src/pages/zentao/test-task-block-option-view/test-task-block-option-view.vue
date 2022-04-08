<template src="./test-task-block-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskBlockOptionViewBase } from './test-task-block-option-view-base';
import view_form from '@widgets/test-task/block-form/block-form.vue';

/**
 * 阻塞视图
 *
 * @export
 * @class TestTaskBlockOptionView
 * @extends {TestTaskBlockOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskBlockOptionView extends TestTaskBlockOptionViewBase {}
</script>
