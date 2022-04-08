<template src="./doc-doc-status-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocDocStatusEditViewBase } from './doc-doc-status-edit-view-base';
import view_form from '@widgets/doc/docstatus-form/docstatus-form.vue';

/**
 * 文档编辑视图视图
 *
 * @export
 * @class DocDocStatusEditView
 * @extends {DocDocStatusEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocDocStatusEditView extends DocDocStatusEditViewBase {}
</script>
