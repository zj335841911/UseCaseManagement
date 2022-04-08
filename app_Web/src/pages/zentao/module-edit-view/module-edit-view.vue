<template src="./module-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModuleEditViewBase } from './module-edit-view-base';
import view_form from '@widgets/module/main-form/main-form.vue';

/**
 * 模块视图
 *
 * @export
 * @class ModuleEditView
 * @extends {ModuleEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class ModuleEditView extends ModuleEditViewBase {}
</script>
