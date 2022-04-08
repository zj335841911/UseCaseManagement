<template src="./ibz-report-role-config-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportRoleConfigGridViewBase } from './ibz-report-role-config-grid-view-base';
import view_grid from '@widgets/ibz-report-role-config/main-grid/main-grid.vue';
import view_searchform from '@widgets/ibz-report-role-config/default-searchform/default-searchform.vue';

/**
 * 汇报角色配置表格视图视图
 *
 * @export
 * @class IbzReportRoleConfigGridView
 * @extends {IbzReportRoleConfigGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportRoleConfigGridView extends IbzReportRoleConfigGridViewBase {}
</script>
