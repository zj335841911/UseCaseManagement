<template src="./doc-grid-view-recent-more.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocGridView_RecentMoreBase } from './doc-grid-view-recent-more-base';
import view_grid from '@widgets/doc/more-recent-update-grid/more-recent-update-grid.vue';
import view_searchform from '@widgets/doc/default-searchform/default-searchform.vue';

/**
 * doc表格视图视图
 *
 * @export
 * @class DocGridView_RecentMore
 * @extends {DocGridView_RecentMoreBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class DocGridView_RecentMore extends DocGridView_RecentMoreBase { }
</script>
