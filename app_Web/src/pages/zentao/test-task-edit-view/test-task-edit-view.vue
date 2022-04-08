<template src="./test-task-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditViewBase } from './test-task-edit-view-base';
import view_form from '@widgets/test-task/main-form/main-form.vue';

/**
 * 测试单编辑视图视图
 *
 * @export
 * @class TestTaskEditView
 * @extends {TestTaskEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskEditView extends TestTaskEditViewBase {}
</script>
