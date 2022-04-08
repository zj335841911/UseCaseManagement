<template src="./sys-team-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamUsr2GridViewBase } from './sys-team-usr2-grid-view-base';
import view_grid from '@widgets/sys-team/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-team/default-searchform/default-searchform.vue';

/**
 * 组表格视图视图
 *
 * @export
 * @class SysTeamUsr2GridView
 * @extends {SysTeamUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamUsr2GridView extends SysTeamUsr2GridViewBase {}
</script>
