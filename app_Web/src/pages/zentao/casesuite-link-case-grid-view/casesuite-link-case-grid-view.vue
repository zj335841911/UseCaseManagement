<template src="./casesuite-link-case-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CasesuiteLinkCaseGridViewBase } from './casesuite-link-case-grid-view-base';
import view_grid from '@widgets/case/main-link-test-grid/main-link-test-grid.vue';
import view_searchbar from '@widgets/case/custom-searchbar/custom-searchbar.vue';
import view_searchform from '@widgets/case/default-searchform/default-searchform.vue';

/**
 * 测试用例表格视图（关联用例）视图
 *
 * @export
 * @class CasesuiteLinkCaseGridView
 * @extends {CasesuiteLinkCaseGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class CasesuiteLinkCaseGridView extends CasesuiteLinkCaseGridViewBase {}
</script>
