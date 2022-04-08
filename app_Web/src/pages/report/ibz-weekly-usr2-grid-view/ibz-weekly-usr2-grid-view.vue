<template src="./ibz-weekly-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyUsr2GridViewBase } from './ibz-weekly-usr2-grid-view-base';
import view_grid from '@widgets/ibzweekly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibzweekly/default-searchform/default-searchform.vue';

/**
 * 周报表格视图视图
 *
 * @export
 * @class IbzWeeklyUsr2GridView
 * @extends {IbzWeeklyUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyUsr2GridView extends IbzWeeklyUsr2GridViewBase {}
</script>
