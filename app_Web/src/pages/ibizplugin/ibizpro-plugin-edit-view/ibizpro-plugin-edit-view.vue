<template src="./ibizpro-plugin-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZProPluginEditViewBase } from './ibizpro-plugin-edit-view-base';
import view_form from '@widgets/ibizpro-plugin/main-form/main-form.vue';

/**
 * 系统插件编辑视图视图
 *
 * @export
 * @class IBIZProPluginEditView
 * @extends {IBIZProPluginEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZProPluginEditView extends IBIZProPluginEditViewBase {}
</script>
