<template src="./test-module-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestModuleTreeExpViewBase } from './test-module-tree-exp-view-base';
import view_treeexpbar from '@widgets/test-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 测试模块树导航视图视图
 *
 * @export
 * @class TestModuleTreeExpView
 * @extends {TestModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class TestModuleTreeExpView extends TestModuleTreeExpViewBase {}
</script>
