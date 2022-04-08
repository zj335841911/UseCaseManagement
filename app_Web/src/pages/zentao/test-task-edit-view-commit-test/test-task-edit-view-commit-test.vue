<template src="./test-task-edit-view-commit-test.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditView_commitTestBase } from './test-task-edit-view-commit-test-base';
import view_form from '@widgets/test-task/build-submit-form/build-submit-form.vue';

/**
 * 提交测试视图
 *
 * @export
 * @class TestTaskEditView_commitTest
 * @extends {TestTaskEditView_commitTestBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskEditView_commitTest extends TestTaskEditView_commitTestBase {}
</script>
