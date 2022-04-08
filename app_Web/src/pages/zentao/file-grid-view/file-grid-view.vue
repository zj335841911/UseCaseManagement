<template src="./file-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FileGridViewBase } from './file-grid-view-base';
import view_grid from '@widgets/file/doc-lib-l-grid/doc-lib-l-grid.vue';
import view_searchform from '@widgets/file/default-searchform/default-searchform.vue';

/**
 * file表格视图视图
 *
 * @export
 * @class FileGridView
 * @extends {FileGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class FileGridView extends FileGridViewBase { }
</script>
