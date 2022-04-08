<template src="./doc-lib-product-grid-exp-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibProductGridExpViewBase } from './doc-lib-product-grid-exp-view-base';
import view_gridexpbar from '@widgets/doc-lib/product-grid-exp-viewgridexpbar-gridexpbar/product-grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 文档库表格导航视图（产品文档库导航视图）视图
 *
 * @export
 * @class DocLibProductGridExpView
 * @extends {DocLibProductGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibProductGridExpView extends DocLibProductGridExpViewBase { }
</script>
