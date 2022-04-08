<template src="./sys-team-member-usr2-grid-view-post-members.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamMemberUsr2GridViewPostMembersBase } from './sys-team-member-usr2-grid-view-post-members-base';
import view_grid from '@widgets/sys-team-member/main-grid/main-grid.vue';
import view_searchform from '@widgets/sys-team-member/default-searchform/default-searchform.vue';

/**
 * 组成员表格视图视图
 *
 * @export
 * @class SysTeamMemberUsr2GridViewPostMembers
 * @extends {SysTeamMemberUsr2GridViewPostMembersBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamMemberUsr2GridViewPostMembers extends SysTeamMemberUsr2GridViewPostMembersBase {}
</script>
