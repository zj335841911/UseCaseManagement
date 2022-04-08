<template src="./ibz-plan-templet-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzPlanTempletGridViewBase } from './ibz-plan-templet-grid-view-base';
import view_grid from '@widgets/ibz-plan-templet/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-plan-templet/default-searchform/default-searchform.vue';

/**
 * 产品计划模板表格视图视图
 *
 * @export
 * @class IbzPlanTempletGridView
 * @extends {IbzPlanTempletGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzPlanTempletGridView extends IbzPlanTempletGridViewBase {}
</script>
