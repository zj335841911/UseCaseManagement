<template src="./ibz-lib-module-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibModuleEditViewBase } from './ibz-lib-module-edit-view-base';
import view_form from '@widgets/ibz-lib-module/main-form/main-form.vue';

/**
 * 用例库模块编辑视图视图
 *
 * @export
 * @class IbzLibModuleEditView
 * @extends {IbzLibModuleEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzLibModuleEditView extends IbzLibModuleEditViewBase {}
</script>
