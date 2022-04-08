<template src="./doc-lib-by-project-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibByProjectTreeExpViewBase } from './doc-lib-by-project-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/by-project-tree-exp-viewtreeexpbar-treeexpbar/by-project-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（项目下属）视图
 *
 * @export
 * @class DocLibByProjectTreeExpView
 * @extends {DocLibByProjectTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibByProjectTreeExpView extends DocLibByProjectTreeExpViewBase {}
</script>
