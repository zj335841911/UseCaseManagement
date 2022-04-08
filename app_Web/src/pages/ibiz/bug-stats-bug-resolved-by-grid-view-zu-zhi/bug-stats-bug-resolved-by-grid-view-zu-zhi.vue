<template src="./bug-stats-bug-resolved-by-grid-view-zu-zhi.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStatsBugResolvedByGridViewZuZhiBase } from './bug-stats-bug-resolved-by-grid-view-zu-zhi-base';
import view_grid from '@widgets/bug-stats/bug-resolved-gird-grid/bug-resolved-gird-grid.vue';
import view_searchform from '@widgets/bug-stats/bug-resolved-gird-searchform/bug-resolved-gird-searchform.vue';

/**
 * Bug统计表格视图（Bug完成表）视图
 *
 * @export
 * @class BugStatsBugResolvedByGridViewZuZhi
 * @extends {BugStatsBugResolvedByGridViewZuZhiBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugStatsBugResolvedByGridViewZuZhi extends BugStatsBugResolvedByGridViewZuZhiBase {}
</script>
