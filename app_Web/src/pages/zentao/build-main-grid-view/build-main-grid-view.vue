<template src="./build-main-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BuildMainGridViewBase } from './build-main-grid-view-base';
import view_grid from '@widgets/build/main-grid/main-grid.vue';
import view_searchbar from '@widgets/build/custom-searchbar/custom-searchbar.vue';

/**
 * 版本表格视图视图
 *
 * @export
 * @class BuildMainGridView
 * @extends {BuildMainGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BuildMainGridView extends BuildMainGridViewBase {}
</script>
