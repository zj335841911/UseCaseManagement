<template src="./test-task-edit-view9-info.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestTaskEditView9_InfoBase } from './test-task-edit-view9-info-base';
import view_form from '@widgets/test-task/main-info-form/main-info-form.vue';

/**
 * 测试版本编辑视图视图
 *
 * @export
 * @class TestTaskEditView9_Info
 * @extends {TestTaskEditView9_InfoBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestTaskEditView9_Info extends TestTaskEditView9_InfoBase {}
</script>
