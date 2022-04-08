<template src="./doc-lib-module-child-wei-hui-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibModuleChildWeiHuiTreeExpViewBase } from './doc-lib-module-child-wei-hui-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib-module/child-wei-hui-tree-exp-viewtreeexpbar-treeexpbar/child-wei-hui-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库分类树导航视图视图
 *
 * @export
 * @class DocLibModuleChildWeiHuiTreeExpView
 * @extends {DocLibModuleChildWeiHuiTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibModuleChildWeiHuiTreeExpView extends DocLibModuleChildWeiHuiTreeExpViewBase {}
</script>
