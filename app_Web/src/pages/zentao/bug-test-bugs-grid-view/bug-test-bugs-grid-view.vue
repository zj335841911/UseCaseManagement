<template src="./bug-test-bugs-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTestBugsGridViewBase } from './bug-test-bugs-grid-view-base';
import view_grid from '@widgets/bug/main-data-export-grid/main-data-export-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * Bug表格视图(遗留的bug)视图
 *
 * @export
 * @class BugTestBugsGridView
 * @extends {BugTestBugsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugTestBugsGridView extends BugTestBugsGridViewBase {}
</script>
