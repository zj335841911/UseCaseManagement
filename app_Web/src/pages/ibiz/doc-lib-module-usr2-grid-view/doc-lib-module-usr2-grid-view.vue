<template src="./doc-lib-module-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibModuleUsr2GridViewBase } from './doc-lib-module-usr2-grid-view-base';
import view_grid from '@widgets/doc-lib-module/main-grid/main-grid.vue';

/**
 * 文档库分类表格视图视图
 *
 * @export
 * @class DocLibModuleUsr2GridView
 * @extends {DocLibModuleUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibModuleUsr2GridView extends DocLibModuleUsr2GridViewBase {}
</script>
