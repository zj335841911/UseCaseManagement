<template src="./doc-lib-un-done-project-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibUnDoneProjectTreeExpViewBase } from './doc-lib-un-done-project-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/un-done-project-tree-exp-viewtreeexpbar-treeexpbar/un-done-project-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图视图
 *
 * @export
 * @class DocLibUnDoneProjectTreeExpView
 * @extends {DocLibUnDoneProjectTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibUnDoneProjectTreeExpView extends DocLibUnDoneProjectTreeExpViewBase {}
</script>
