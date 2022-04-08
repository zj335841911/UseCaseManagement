<template src="./bug-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugUsr2GridViewBase } from './bug-usr2-grid-view-base';
import view_grid from '@widgets/bug/main-build-sub3-grid/main-build-sub3-grid.vue';
import view_searchbar from '@widgets/bug/custom-searchbar/custom-searchbar.vue';

/**
 * Bug表格视图视图
 *
 * @export
 * @class BugUsr2GridView
 * @extends {BugUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class BugUsr2GridView extends BugUsr2GridViewBase {}
</script>
