<template src="./case-runerentry-grid-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseRUNEREntryGridViewBase } from './case-runerentry-grid-view-base';
import view_grid from '@widgets/case/case-result-entry-grid/case-result-entry-grid.vue';

/**
 * 测试用例表格视图（测试结果条目）视图
 *
 * @export
 * @class CaseRUNEREntryGridView
 * @extends {CaseRUNEREntryGridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class CaseRUNEREntryGridView extends CaseRUNEREntryGridViewBase { }
</script>
