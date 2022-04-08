<template src="./doc-mian-bedit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocMianBEditView9Base } from './doc-mian-bedit-view9-base';
import view_form from '@widgets/doc/mainbody-form/mainbody-form.vue';

/**
 * 文档编辑视图（正文）视图
 *
 * @export
 * @class DocMianBEditView9
 * @extends {DocMianBEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocMianBEditView9 extends DocMianBEditView9Base {}
</script>
