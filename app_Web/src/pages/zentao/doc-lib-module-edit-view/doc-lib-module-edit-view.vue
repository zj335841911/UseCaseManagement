<template src="./doc-lib-module-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibModuleEditViewBase } from './doc-lib-module-edit-view-base';
import view_form from '@widgets/doc-lib-module/main-form/main-form.vue';

/**
 * 文档库分类编辑视图视图
 *
 * @export
 * @class DocLibModuleEditView
 * @extends {DocLibModuleEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibModuleEditView extends DocLibModuleEditViewBase {}
</script>
