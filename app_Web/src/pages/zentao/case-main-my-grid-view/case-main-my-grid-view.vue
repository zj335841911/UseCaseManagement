<template src="./case-main-my-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainMyGridViewBase } from './case-main-my-grid-view-base';
import view_grid from '@widgets/case/main-grid-grid/main-grid-grid.vue';
import view_searchbar from '@widgets/case/custom-searchbar/custom-searchbar.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseMainMyGridView
 * @extends {CaseMainMyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainMyGridView extends CaseMainMyGridViewBase {}
</script>
