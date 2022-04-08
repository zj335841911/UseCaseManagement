<template src="./file-project-grid-view-file.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FileProjectGridViewFileBase } from './file-project-grid-view-file-base';
import view_grid from '@widgets/file/doc-lib-l-grid/doc-lib-l-grid.vue';
import view_searchform from '@widgets/file/default-searchform/default-searchform.vue';

/**
 * file表格视图视图
 *
 * @export
 * @class FileProjectGridViewFile
 * @extends {FileProjectGridViewFileBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class FileProjectGridViewFile extends FileProjectGridViewFileBase {}
</script>
