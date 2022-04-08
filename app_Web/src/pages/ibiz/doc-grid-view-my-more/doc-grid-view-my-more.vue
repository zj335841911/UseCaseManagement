<template src="./doc-grid-view-my-more.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridView_MyMoreBase } from './doc-grid-view-my-more-base';
import view_grid from '@widgets/doc/more-recent-update-grid/more-recent-update-grid.vue';
import view_searchform from '@widgets/doc/default-searchform/default-searchform.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridView_MyMore
 * @extends {DocGridView_MyMoreBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView_MyMore extends DocGridView_MyMoreBase { }
</script>
