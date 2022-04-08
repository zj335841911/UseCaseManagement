<template src="./doc-lib-by-product-tree-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibByProductTreeExpViewBase } from './doc-lib-by-product-tree-exp-view-base';
import view_treeexpbar from '@widgets/doc-lib/by-product-tree-exp-viewtreeexpbar-treeexpbar/by-product-tree-exp-viewtreeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（产品下属）视图
 *
 * @export
 * @class DocLibByProductTreeExpView
 * @extends {DocLibByProductTreeExpViewBase}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibByProductTreeExpView extends DocLibByProductTreeExpViewBase {}
</script>
