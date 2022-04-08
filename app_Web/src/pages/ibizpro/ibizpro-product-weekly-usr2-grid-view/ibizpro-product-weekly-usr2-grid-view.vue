<template src="./ibizpro-product-weekly-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductWeeklyUsr2GridViewBase } from './ibizpro-product-weekly-usr2-grid-view-base';
import view_grid from '@widgets/ibizpro-product-weekly/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibizpro-product-weekly/default-searchform/default-searchform.vue';

/**
 * 产品周报表格视图视图
 *
 * @export
 * @class IbizproProductWeeklyUsr2GridView
 * @extends {IbizproProductWeeklyUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductWeeklyUsr2GridView extends IbizproProductWeeklyUsr2GridViewBase {}
</script>
