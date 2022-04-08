<template src="./doc-lib-grid-view-3983.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibGridView_3983Base } from './doc-lib-grid-view-3983-base';
import view_grid from '@widgets/doc-lib/main-grid/main-grid.vue';
import view_searchform from '@widgets/doc-lib/default-searchform/default-searchform.vue';

/**
 * doclib表格视图视图
 *
 * @export
 * @class DocLibGridView_3983
 * @extends {DocLibGridView_3983Base}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibGridView_3983 extends DocLibGridView_3983Base { }
</script>
