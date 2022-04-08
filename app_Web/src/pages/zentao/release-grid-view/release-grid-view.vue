<template src="./release-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ReleaseGridViewBase } from './release-grid-view-base';
import view_grid from '@widgets/release/main-grid/main-grid.vue';
import view_searchbar from '@widgets/release/custom-searchbar/custom-searchbar.vue';

/**
 * 发布表格视图视图
 *
 * @export
 * @class ReleaseGridView
 * @extends {ReleaseGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class ReleaseGridView extends ReleaseGridViewBase {}
</script>
