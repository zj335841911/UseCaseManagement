<template src="./doc-doc-sum-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocDocSumEditView9Base } from './doc-doc-sum-edit-view9-base';
import view_form from '@widgets/doc/doc-summary-form/doc-summary-form.vue';

/**
 * 文档编辑视图（文档摘要）视图
 *
 * @export
 * @class DocDocSumEditView9
 * @extends {DocDocSumEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocDocSumEditView9 extends DocDocSumEditView9Base {}
</script>
