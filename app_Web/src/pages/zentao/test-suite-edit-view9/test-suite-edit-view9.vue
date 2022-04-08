<template src="./test-suite-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestSuiteEditView9Base } from './test-suite-edit-view9-base';
import view_form from '@widgets/test-suite/main-info-form/main-info-form.vue';

/**
 * 测试套件编辑视图视图
 *
 * @export
 * @class TestSuiteEditView9
 * @extends {TestSuiteEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestSuiteEditView9 extends TestSuiteEditView9Base {}
</script>
