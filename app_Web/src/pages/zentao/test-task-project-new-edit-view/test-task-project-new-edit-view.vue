<template src="./test-task-project-new-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskProjectNewEditViewBase } from './test-task-project-new-edit-view-base';
import view_form from '@widgets/test-task/project-new-form/project-new-form.vue';

/**
 * 测试单编辑视图视图
 *
 * @export
 * @class TestTaskProjectNewEditView
 * @extends {TestTaskProjectNewEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskProjectNewEditView extends TestTaskProjectNewEditViewBase {}
</script>
