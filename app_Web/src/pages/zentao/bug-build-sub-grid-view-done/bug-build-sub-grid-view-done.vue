<template src="./bug-build-sub-grid-view-done.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBuildSubGridView_DoneBase } from './bug-build-sub-grid-view-done-base';
import view_grid from '@widgets/bug/main-build-sub2-grid/main-build-sub2-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugBuildSubGridView_Done
 * @extends {BugBuildSubGridView_DoneBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugBuildSubGridView_Done extends BugBuildSubGridView_DoneBase {}
</script>
