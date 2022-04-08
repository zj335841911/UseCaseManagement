<template src="./ibz-report-role-config-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportRoleConfigEditViewBase } from './ibz-report-role-config-edit-view-base';
import view_form from '@widgets/ibz-report-role-config/main-form/main-form.vue';

/**
 * 汇报角色配置编辑视图视图
 *
 * @export
 * @class IbzReportRoleConfigEditView
 * @extends {IbzReportRoleConfigEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportRoleConfigEditView extends IbzReportRoleConfigEditViewBase {}
</script>
