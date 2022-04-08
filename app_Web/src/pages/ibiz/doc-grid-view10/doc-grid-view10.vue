<template src="./doc-grid-view10.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridView10Base } from './doc-grid-view10-base';
import view_grid from '@widgets/doc/my-doc-grid/my-doc-grid.vue';

/**
 * 文档表格视图视图
 *
 * @export
 * @class DocGridView10
 * @extends {DocGridView10Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView10 extends DocGridView10Base {}
</script>
