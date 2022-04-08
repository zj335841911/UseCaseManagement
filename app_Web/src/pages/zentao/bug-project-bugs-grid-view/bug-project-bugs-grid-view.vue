<template src="./bug-project-bugs-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugProjectBugsGridViewBase } from './bug-project-bugs-grid-view-base';
import view_grid from '@widgets/bug/main-grid/main-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';
import view_searchform from '@widgets/bug/default-searchform/default-searchform.vue';

/**
 * Bug实体表格视图(项目遗留得Bug)视图
 *
 * @export
 * @class BugProjectBugsGridView
 * @extends {BugProjectBugsGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class BugProjectBugsGridView extends BugProjectBugsGridViewBase {}
</script>
