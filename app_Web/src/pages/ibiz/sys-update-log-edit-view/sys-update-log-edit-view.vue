<template src="./sys-update-log-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogEditViewBase } from './sys-update-log-edit-view-base';
import view_form from '@widgets/sys-update-log/main-form/main-form.vue';

/**
 * 系统更新日志编辑视图视图
 *
 * @export
 * @class SysUpdateLogEditView
 * @extends {SysUpdateLogEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogEditView extends SysUpdateLogEditViewBase {}
</script>
