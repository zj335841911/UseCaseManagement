<template src="./test-result-medit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestResultMEditView9Base } from './test-result-medit-view9-base';
import view_meditviewpanel from '@widgets/test-result/main-multieditviewpanel/main-multieditviewpanel.vue';

/**
 * 测试结果多表单编辑视图视图
 *
 * @export
 * @class TestResultMEditView9
 * @extends {TestResultMEditView9Base}
 */
@Component({
    components: {
        view_meditviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class TestResultMEditView9 extends TestResultMEditView9Base {}
</script>
<style lang="less">
@import './test-result-medit-view9.less';
</style>
