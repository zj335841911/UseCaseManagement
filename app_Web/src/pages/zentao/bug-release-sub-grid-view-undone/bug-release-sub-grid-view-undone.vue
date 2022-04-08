<template src="./bug-release-sub-grid-view-undone.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugReleaseSubGridView_UndoneBase } from './bug-release-sub-grid-view-undone-base';
import view_grid from '@widgets/bug/main-release-sub-grid/main-release-sub-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugReleaseSubGridView_Undone
 * @extends {BugReleaseSubGridView_UndoneBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugReleaseSubGridView_Undone extends BugReleaseSubGridView_UndoneBase {}
</script>
