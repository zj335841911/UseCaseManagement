<template src="./sys-update-features-info-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysUpdateFeaturesInfoEditViewBase } from './sys-update-features-info-edit-view-base';
import view_form from '@widgets/sys-update-features/info-main-form/info-main-form.vue';

/**
 * 系统更新功能编辑视图视图
 *
 * @export
 * @class SysUpdateFeaturesInfoEditView
 * @extends {SysUpdateFeaturesInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class SysUpdateFeaturesInfoEditView extends SysUpdateFeaturesInfoEditViewBase {}
</script>
