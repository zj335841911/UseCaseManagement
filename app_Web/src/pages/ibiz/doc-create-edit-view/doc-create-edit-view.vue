<template src="./doc-create-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocCreateEditViewBase } from './doc-create-edit-view-base';
import view_form from '@widgets/doc/create-edit-form-form/create-edit-form-form.vue';

/**
 * 创建文档视图
 *
 * @export
 * @class DocCreateEditView
 * @extends {DocCreateEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocCreateEditView extends DocCreateEditViewBase {}
</script>
