<template src="./test-task-edit-view9-detail.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditView9_DetailBase } from './test-task-edit-view9-detail-base';
import view_form from '@widgets/test-task/main-detail-form/main-detail-form.vue';

/**
 * 测试版本编辑视图视图
 *
 * @export
 * @class TestTaskEditView9_Detail
 * @extends {TestTaskEditView9_DetailBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskEditView9_Detail extends TestTaskEditView9_DetailBase {}
</script>
