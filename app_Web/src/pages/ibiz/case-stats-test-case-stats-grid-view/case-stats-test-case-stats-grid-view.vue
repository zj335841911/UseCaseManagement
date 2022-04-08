<template src="./case-stats-test-case-stats-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseStatsTestCaseStatsGridViewBase } from './case-stats-test-case-stats-grid-view-base';
import view_grid from '@widgets/case-stats/test-case-stats-grid/test-case-stats-grid.vue';
import view_searchform from '@widgets/case-stats/test-case-stats-searchform/test-case-stats-searchform.vue';

/**
 * 测试用例统计表格视图视图
 *
 * @export
 * @class CaseStatsTestCaseStatsGridView
 * @extends {CaseStatsTestCaseStatsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class CaseStatsTestCaseStatsGridView extends CaseStatsTestCaseStatsGridViewBase {}
</script>
