<template src="./sys-update-features-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateFeaturesEditViewBase } from './sys-update-features-edit-view-base';
import view_form from '@widgets/sys-update-features/main-form/main-form.vue';

/**
 * 系统更新功能编辑视图视图
 *
 * @export
 * @class SysUpdateFeaturesEditView
 * @extends {SysUpdateFeaturesEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateFeaturesEditView extends SysUpdateFeaturesEditViewBase {}
</script>
