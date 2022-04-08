<template src="./test-result-test-task-medit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestResultTestTaskMEditView9Base } from './test-result-test-task-medit-view9-base';
import view_meditviewpanel from '@widgets/test-result/main-multieditviewpanel/main-multieditviewpanel.vue';

/**
 * 测试结果多表单编辑视图视图
 *
 * @export
 * @class TestResultTestTaskMEditView9
 * @extends {TestResultTestTaskMEditView9Base}
 */
@Component({
    components: {
        view_meditviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestResultTestTaskMEditView9 extends TestResultTestTaskMEditView9Base {}
</script>
<style lang="less">
@import './test-result-test-task-medit-view9.less';
</style>
