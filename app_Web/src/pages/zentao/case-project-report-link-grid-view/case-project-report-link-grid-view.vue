<template src="./case-project-report-link-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseProjectReportLinkGridViewBase } from './case-project-report-link-grid-view-base';
import view_grid from '@widgets/case/re-port-main-grid-grid/re-port-main-grid-grid.vue';
import view_searchbar from '@widgets/case/other-custom-searchbar/other-custom-searchbar.vue';

/**
 * 测试用例表格视图（报告关联用例）视图
 *
 * @export
 * @class CaseProjectReportLinkGridView
 * @extends {CaseProjectReportLinkGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class CaseProjectReportLinkGridView extends CaseProjectReportLinkGridViewBase {}
</script>
