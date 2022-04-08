<template src="./sys-team-member-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamMemberEditViewBase } from './sys-team-member-edit-view-base';
import view_form from '@widgets/sys-team-member/exp-main-edit-form/exp-main-edit-form.vue';

/**
 * 组成员编辑视图视图
 *
 * @export
 * @class SysTeamMemberEditView
 * @extends {SysTeamMemberEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamMemberEditView extends SysTeamMemberEditViewBase {}
</script>
