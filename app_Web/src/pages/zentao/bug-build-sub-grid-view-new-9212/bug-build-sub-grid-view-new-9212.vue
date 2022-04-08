<template src="./bug-build-sub-grid-view-new-9212.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBuildSubGridView_New_9212Base } from './bug-build-sub-grid-view-new-9212-base';
import view_grid from '@widgets/bug/main-build-sub-grid/main-build-sub-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * bug表格视图视图
 *
 * @export
 * @class BugBuildSubGridView_New_9212
 * @extends {BugBuildSubGridView_New_9212Base}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugBuildSubGridView_New_9212 extends BugBuildSubGridView_New_9212Base {}
</script>
