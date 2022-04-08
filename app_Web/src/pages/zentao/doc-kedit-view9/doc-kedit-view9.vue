<template src="./doc-kedit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DocKEditView9Base } from './doc-kedit-view9-base';
import view_form from '@widgets/doc/keywords-form/keywords-form.vue';

/**
 * 文档编辑视图（关键字）视图
 *
 * @export
 * @class DocKEditView9
 * @extends {DocKEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class DocKEditView9 extends DocKEditView9Base {}
</script>
