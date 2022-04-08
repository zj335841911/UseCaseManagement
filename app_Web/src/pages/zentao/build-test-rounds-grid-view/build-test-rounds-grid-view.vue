<template src="./build-test-rounds-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildTestRoundsGridViewBase } from './build-test-rounds-grid-view-base';
import view_grid from '@widgets/build/test-rounds-grid/test-rounds-grid.vue';
import view_searchbar from '@widgets/build/custom-searchbar/custom-searchbar.vue';

/**
 * 版本表格视图（轮次）视图
 *
 * @export
 * @class BuildTestRoundsGridView
 * @extends {BuildTestRoundsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BuildTestRoundsGridView extends BuildTestRoundsGridViewBase {}
</script>
