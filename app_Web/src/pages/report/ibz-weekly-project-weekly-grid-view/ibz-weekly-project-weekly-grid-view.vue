<template src="./ibz-weekly-project-weekly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyProjectWeeklyGridViewBase } from './ibz-weekly-project-weekly-grid-view-base';
import view_grid from '@widgets/ibzweekly/project-weekly-main-grid/project-weekly-main-grid.vue';
import view_searchform from '@widgets/ibzweekly/default-searchform/default-searchform.vue';

/**
 * 周报表格视图视图
 *
 * @export
 * @class IbzWeeklyProjectWeeklyGridView
 * @extends {IbzWeeklyProjectWeeklyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyProjectWeeklyGridView extends IbzWeeklyProjectWeeklyGridViewBase {}
</script>
