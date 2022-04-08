<template src="./bug-stats-bug-resolved-by-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsBugResolvedByGridViewBase } from './bug-stats-bug-resolved-by-grid-view-base';
import view_grid from '@widgets/bug-stats/bug-resolved-by-grid/bug-resolved-by-grid.vue';
import view_searchform from '@widgets/bug-stats/bug-resolved-by-searchform/bug-resolved-by-searchform.vue';

/**
 * Bug统计表格视图（Bug完成表）视图
 *
 * @export
 * @class BugStatsBugResolvedByGridView
 * @extends {BugStatsBugResolvedByGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsBugResolvedByGridView extends BugStatsBugResolvedByGridViewBase {}
</script>
