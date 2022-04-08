<template src="./sys-team-member-grid-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamMemberGridExpViewBase } from './sys-team-member-grid-exp-view-base';
import view_gridexpbar from '@widgets/sys-team-member/grid-exp-viewgridexpbar-gridexpbar/grid-exp-viewgridexpbar-gridexpbar.vue';

/**
 * 组成员表格导航视图视图
 *
 * @export
 * @class SysTeamMemberGridExpView
 * @extends {SysTeamMemberGridExpViewBase}
 */
@Component({
    components: {
        view_gridexpbar, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamMemberGridExpView extends SysTeamMemberGridExpViewBase {}
</script>
