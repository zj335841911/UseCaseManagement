<template src="./ibizpro-project-daily-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectDailyGridViewBase } from './ibizpro-project-daily-grid-view-base';
import view_grid from '@widgets/ibizpro-project-daily/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-project-daily/default-searchform/default-searchform.vue';

/**
 * 项目日报表格视图视图
 *
 * @export
 * @class IbizproProjectDailyGridView
 * @extends {IbizproProjectDailyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectDailyGridView extends IbizproProjectDailyGridViewBase {}
</script>
