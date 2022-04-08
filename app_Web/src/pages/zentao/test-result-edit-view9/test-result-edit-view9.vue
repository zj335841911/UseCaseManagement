<template src="./test-result-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestResultEditView9Base } from './test-result-edit-view9-base';
import view_form from '@widgets/test-result/main-form/main-form.vue';

/**
 * 测试结果编辑视图视图
 *
 * @export
 * @class TestResultEditView9
 * @extends {TestResultEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestResultEditView9 extends TestResultEditView9Base {}
</script>
