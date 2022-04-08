<template src="./sys-team-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamEditViewBase } from './sys-team-edit-view-base';
import view_form from '@widgets/sys-team/main-form/main-form.vue';

/**
 * 组编辑视图视图
 *
 * @export
 * @class SysTeamEditView
 * @extends {SysTeamEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamEditView extends SysTeamEditViewBase {}
</script>
