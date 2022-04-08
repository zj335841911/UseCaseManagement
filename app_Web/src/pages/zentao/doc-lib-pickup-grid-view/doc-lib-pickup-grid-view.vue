<template src="./doc-lib-pickup-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibPickupGridViewBase } from './doc-lib-pickup-grid-view-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchform from '@widgets/doc-lib/default-searchform/default-searchform.vue';

/**
 * doclib选择表格视图视图
 *
 * @export
 * @class DocLibPickupGridView
 * @extends {DocLibPickupGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibPickupGridView extends DocLibPickupGridViewBase {}
</script>
