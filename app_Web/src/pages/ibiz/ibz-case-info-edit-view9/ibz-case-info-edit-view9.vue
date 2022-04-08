<template src="./ibz-case-info-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseInfoEditView9Base } from './ibz-case-info-edit-view9-base';
import view_form from '@widgets/ibz-case/jbinfo-form/jbinfo-form.vue';

/**
 * 用例库用例编辑视图（基本信息）视图
 *
 * @export
 * @class IbzCaseInfoEditView9
 * @extends {IbzCaseInfoEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseInfoEditView9 extends IbzCaseInfoEditView9Base {}
</script>
