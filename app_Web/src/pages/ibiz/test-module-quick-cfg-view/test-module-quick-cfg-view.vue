<template src="./test-module-quick-cfg-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleQuickCfgViewBase } from './test-module-quick-cfg-view-base';
import view_form from '@widgets/test-module/main-form/main-form.vue';

/**
 * 需求模块视图
 *
 * @export
 * @class TestModuleQuickCfgView
 * @extends {TestModuleQuickCfgViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleQuickCfgView extends TestModuleQuickCfgViewBase {}
</script>
