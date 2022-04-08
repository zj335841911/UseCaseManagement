<template src="./sys-team-member-grid-exp-view-team.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamMemberGridExpViewTeamBase } from './sys-team-member-grid-exp-view-team-base';
import view_gridexpbar from '@widgets/sys-team-member/grid-exp-view-teamgridexpbar-gridexpbar/grid-exp-view-teamgridexpbar-gridexpbar.vue';

/**
 * 组成员表格导航视图视图
 *
 * @export
 * @class SysTeamMemberGridExpViewTeam
 * @extends {SysTeamMemberGridExpViewTeamBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamMemberGridExpViewTeam extends SysTeamMemberGridExpViewTeamBase {}
</script>
