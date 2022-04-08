<template src="./case-cur-test-task-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseCurTestTaskGridViewBase } from './case-cur-test-task-grid-view-base';
import view_grid from '@widgets/case/test-main-grid-grid/test-main-grid-grid.vue';
import view_searchbar from '@widgets/case/other-custom-searchbar/other-custom-searchbar.vue';

/**
 * 功能测试视图
 *
 * @export
 * @class CaseCurTestTaskGridView
 * @extends {CaseCurTestTaskGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class CaseCurTestTaskGridView extends CaseCurTestTaskGridViewBase {}
</script>
