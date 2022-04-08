<template src="./sys-organization-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysOrganizationEditViewBase } from './sys-organization-edit-view-base';
import view_form from '@widgets/sys-organization/main-form/main-form.vue';

/**
 * 单位编辑视图视图
 *
 * @export
 * @class SysOrganizationEditView
 * @extends {SysOrganizationEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysOrganizationEditView extends SysOrganizationEditViewBase {}
</script>
