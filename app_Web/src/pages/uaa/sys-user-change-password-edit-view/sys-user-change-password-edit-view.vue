<template src="./sys-user-change-password-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUserChangePasswordEditViewBase } from './sys-user-change-password-edit-view-base';
import view_form from '@widgets/sys-user/change-password-form/change-password-form.vue';

/**
 * 系统用户编辑视图视图
 *
 * @export
 * @class SysUserChangePasswordEditView
 * @extends {SysUserChangePasswordEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysUserChangePasswordEditView extends SysUserChangePasswordEditViewBase {}
</script>
