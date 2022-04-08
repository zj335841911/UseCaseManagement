<template src="./sys-organization-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysOrganizationUsr2GridViewBase } from './sys-organization-usr2-grid-view-base';
import view_grid from '@widgets/sys-organization/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-organization/default-searchform/default-searchform.vue';

/**
 * 单位单位实体表格视图(通讯录所有组织)视图
 *
 * @export
 * @class SysOrganizationUsr2GridView
 * @extends {SysOrganizationUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysOrganizationUsr2GridView extends SysOrganizationUsr2GridViewBase {}
</script>
