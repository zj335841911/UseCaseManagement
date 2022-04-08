<template src="./ibzpro-config-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzproConfigEditViewBase } from './ibzpro-config-edit-view-base';
import view_form from '@widgets/ibzpro-config/main-form/main-form.vue';

/**
 * 系统配置表编辑视图视图
 *
 * @export
 * @class IbzproConfigEditView
 * @extends {IbzproConfigEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzproConfigEditView extends IbzproConfigEditViewBase {}
</script>
