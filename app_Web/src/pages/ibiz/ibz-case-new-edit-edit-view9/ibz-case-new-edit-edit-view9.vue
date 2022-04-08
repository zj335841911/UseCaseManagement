<template src="./ibz-case-new-edit-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseNewEditEditView9Base } from './ibz-case-new-edit-edit-view9-base';
import view_form from '@widgets/ibz-case/new-edit-form/new-edit-form.vue';

/**
 * 用例库用例编辑视图（创建编辑）视图
 *
 * @export
 * @class IbzCaseNewEditEditView9
 * @extends {IbzCaseNewEditEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseNewEditEditView9 extends IbzCaseNewEditEditView9Base {}
</script>
