<template src="./sys-organization-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysOrganizationGridExpViewBase } from './sys-organization-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-organization/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 单位表格导航视图视图
 *
 * @export
 * @class SysOrganizationGridExpView
 * @extends {SysOrganizationGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysOrganizationGridExpView extends SysOrganizationGridExpViewBase {}
</script>
