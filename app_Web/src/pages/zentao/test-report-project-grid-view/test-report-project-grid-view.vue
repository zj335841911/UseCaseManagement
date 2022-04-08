<template src="./test-report-project-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestReportProjectGridViewBase } from './test-report-project-grid-view-base';
import view_grid from '@widgets/test-report/project-main-grid/project-main-grid.vue';
import view_searchbar from '@widgets/test-report/custom-searchbar/custom-searchbar.vue';

/**
 * 测试报告表格视图视图
 *
 * @export
 * @class TestReportProjectGridView
 * @extends {TestReportProjectGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TestReportProjectGridView extends TestReportProjectGridViewBase {}
</script>
