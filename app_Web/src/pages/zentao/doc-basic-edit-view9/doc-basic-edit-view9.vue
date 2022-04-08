<template src="./doc-basic-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocBasicEditView9Base } from './doc-basic-edit-view9-base';
import view_form from '@widgets/doc/main-form/main-form.vue';

/**
 * 文档编辑视图（基本信息）视图
 *
 * @export
 * @class DocBasicEditView9
 * @extends {DocBasicEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocBasicEditView9 extends DocBasicEditView9Base {}
</script>
