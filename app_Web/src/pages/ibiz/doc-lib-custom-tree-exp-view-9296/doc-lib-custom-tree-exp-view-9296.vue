<template src="./doc-lib-custom-tree-exp-view-9296.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibCustomTreeExpView_9296Base } from './doc-lib-custom-tree-exp-view-9296-base';
import view_treeexpbar from '@widgets/doc-lib/custom-tree-exp-view-9296treeexpbar-treeexpbar/custom-tree-exp-view-9296treeexpbar-treeexpbar.vue';

/**
 * 文档库树导航视图（自定义文档库）视图
 *
 * @export
 * @class DocLibCustomTreeExpView_9296
 * @extends {DocLibCustomTreeExpView_9296Base}
 */
@Component({
    components: {
        view_treeexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibCustomTreeExpView_9296 extends DocLibCustomTreeExpView_9296Base {}
</script>
