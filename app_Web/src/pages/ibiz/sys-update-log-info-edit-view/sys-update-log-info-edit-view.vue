<template src="./sys-update-log-info-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateLogInfoEditViewBase } from './sys-update-log-info-edit-view-base';
import view_form from '@widgets/sys-update-log/main-l-form/main-l-form.vue';

/**
 * 系统更新日志编辑视图视图
 *
 * @export
 * @class SysUpdateLogInfoEditView
 * @extends {SysUpdateLogInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateLogInfoEditView extends SysUpdateLogInfoEditViewBase {}
</script>
