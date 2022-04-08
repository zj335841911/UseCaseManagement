<template src="./doc-lib-custom-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibCustomTreeExpViewBase } from './doc-lib-custom-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/custom-tree-exp-viewtreeexpbar-treeexpbar/custom-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（自定义文档库）视图
 *
 * @export
 * @class DocLibCustomTreeExpView
 * @extends {DocLibCustomTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibCustomTreeExpView extends DocLibCustomTreeExpViewBase {}
</script>
