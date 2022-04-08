<template src="./case-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainGridViewBase } from './case-main-grid-view-base';
import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';
import view_searchbar from '@widgets/case/custom-searchbar/custom-searchbar.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainGridView
 * @extends {CaseMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainGridView extends CaseMainGridViewBase {}
</script>
