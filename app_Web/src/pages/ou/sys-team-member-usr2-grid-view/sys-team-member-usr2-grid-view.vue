<template src="./sys-team-member-usr2-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamMemberUsr2GridViewBase } from './sys-team-member-usr2-grid-view-base';
import view_grid from '@widgets/sys-team-member/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-team-member/default-searchform/default-searchform.vue';

/**
 * 组成员表格视图视图
 *
 * @export
 * @class SysTeamMemberUsr2GridView
 * @extends {SysTeamMemberUsr2GridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamMemberUsr2GridView extends SysTeamMemberUsr2GridViewBase {}
</script>
