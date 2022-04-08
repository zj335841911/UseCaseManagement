<template src="./doc-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocEditViewBase } from './doc-edit-view-base';
import view_form from '@widgets/doc/create-edit-form-form/create-edit-form-form.vue';

/**
 * doc编辑视图视图
 *
 * @export
 * @class DocEditView
 * @extends {DocEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocEditView extends DocEditViewBase {}
</script>
