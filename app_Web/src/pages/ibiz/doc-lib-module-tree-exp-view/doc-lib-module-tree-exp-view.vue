<template src="./doc-lib-module-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibModuleTreeExpViewBase } from './doc-lib-module-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib-module/tree-exp-viewtreeexpbar-treeexpbar/tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库分类树导航视图视图
 *
 * @export
 * @class DocLibModuleTreeExpView
 * @extends {DocLibModuleTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibModuleTreeExpView extends DocLibModuleTreeExpViewBase {}
</script>
