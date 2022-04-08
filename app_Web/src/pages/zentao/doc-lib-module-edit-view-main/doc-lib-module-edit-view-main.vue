<template src="./doc-lib-module-edit-view-main.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocLibModuleEditViewMainBase } from './doc-lib-module-edit-view-main-base';
import view_form from '@widgets/doc-lib-module/main-edit-form/main-edit-form.vue';

/**
 * 文档库分类编辑视图视图
 *
 * @export
 * @class DocLibModuleEditViewMain
 * @extends {DocLibModuleEditViewMainBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocLibModuleEditViewMain extends DocLibModuleEditViewMainBase {}
</script>
