<template src="./test-suite-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteEditViewBase } from './test-suite-edit-view-base';
import view_form from '@widgets/test-suite/main-form/main-form.vue';

/**
 * 测试套件编辑视图视图
 *
 * @export
 * @class TestSuiteEditView
 * @extends {TestSuiteEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestSuiteEditView extends TestSuiteEditViewBase {}
</script>
