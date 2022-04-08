<template src="./ibz-case-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseGridViewBase } from './ibz-case-grid-view-base';
import view_grid from '@widgets/ibz-case/main-grid/main-grid.vue';
import view_searchbar from '@widgets/ibz-case/custom-searchbar/custom-searchbar.vue';

/**
 * 用例库用例表格视图视图
 *
 * @export
 * @class IbzCaseGridView
 * @extends {IbzCaseGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseGridView extends IbzCaseGridViewBase {}
</script>
