<template src="./ibz-weekly-usr3-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyUsr3GridViewBase } from './ibz-weekly-usr3-grid-view-base';
import view_grid from '@widgets/ibzweekly/my-recevied-weekly-grid/my-recevied-weekly-grid.vue';

/**
 * 周报表格视图视图
 *
 * @export
 * @class IbzWeeklyUsr3GridView
 * @extends {IbzWeeklyUsr3GridViewBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyUsr3GridView extends IbzWeeklyUsr3GridViewBase {}
</script>
