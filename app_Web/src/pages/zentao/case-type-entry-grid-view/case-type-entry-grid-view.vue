<template src="./case-type-entry-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseTypeEntryGridViewBase } from './case-type-entry-grid-view-base';
import view_grid from '@widgets/case/case-result-entry-grid/case-result-entry-grid.vue';

/**
 * 测试用例表格视图（测试结果条目）视图
 *
 * @export
 * @class CaseTypeEntryGridView
 * @extends {CaseTypeEntryGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseTypeEntryGridView extends CaseTypeEntryGridViewBase { }
</script>
