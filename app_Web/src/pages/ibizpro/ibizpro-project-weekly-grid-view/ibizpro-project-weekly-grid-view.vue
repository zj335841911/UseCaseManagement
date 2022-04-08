<template src="./ibizpro-project-weekly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectWeeklyGridViewBase } from './ibizpro-project-weekly-grid-view-base';
import view_grid from '@widgets/ibizpro-project-weekly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-project-weekly/default-searchform/default-searchform.vue';

/**
 * 项目周报表格视图视图
 *
 * @export
 * @class IbizproProjectWeeklyGridView
 * @extends {IbizproProjectWeeklyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectWeeklyGridView extends IbizproProjectWeeklyGridViewBase {}
</script>
