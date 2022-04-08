<template src="./ibz-case-main-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseMainEditView9Base } from './ibz-case-main-edit-view9-base';
import view_form from '@widgets/ibz-case/main-info-form/main-info-form.vue';

/**
 * 用例库用例编辑视图（主信息）视图
 *
 * @export
 * @class IbzCaseMainEditView9
 * @extends {IbzCaseMainEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseMainEditView9 extends IbzCaseMainEditView9Base {}
</script>
