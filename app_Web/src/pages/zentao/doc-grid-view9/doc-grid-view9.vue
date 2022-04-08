<template src="./doc-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridView9Base } from './doc-grid-view9-base';
import view_grid from '@widgets/doc/recent-update-grid/recent-update-grid.vue';

/**
 * 文档表格视图视图
 *
 * @export
 * @class DocGridView9
 * @extends {DocGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView9 extends DocGridView9Base {}
</script>
