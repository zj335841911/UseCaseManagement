<template src="./ibizpro-project-monthly-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectMonthlyGridViewBase } from './ibizpro-project-monthly-grid-view-base';
import view_grid from '@widgets/ibizpro-project-monthly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-project-monthly/default-searchform/default-searchform.vue';

/**
 * 项目月报表格视图视图
 *
 * @export
 * @class IbizproProjectMonthlyGridView
 * @extends {IbizproProjectMonthlyGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectMonthlyGridView extends IbizproProjectMonthlyGridViewBase {}
</script>
