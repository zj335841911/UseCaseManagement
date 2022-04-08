<template src="./ibz-plan-templet-detail-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzPlanTempletDetailGridView9Base } from './ibz-plan-templet-detail-grid-view9-base';
import view_grid from '@widgets/plan-templet-detail/main-edit-grid/main-edit-grid.vue';

/**
 * 计划模板详情表格视图视图
 *
 * @export
 * @class IbzPlanTempletDetailGridView9
 * @extends {IbzPlanTempletDetailGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzPlanTempletDetailGridView9 extends IbzPlanTempletDetailGridView9Base {}
</script>
