<template src="./doc-lib-project-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProjectTreeExpViewBase } from './doc-lib-project-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/project-tree-exp-viewtreeexpbar-treeexpbar/project-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（项目文档库）视图
 *
 * @export
 * @class DocLibProjectTreeExpView
 * @extends {DocLibProjectTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProjectTreeExpView extends DocLibProjectTreeExpViewBase {}
</script>
