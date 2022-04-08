<template src="./ibz-case-new-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseNewEditViewBase } from './ibz-case-new-edit-view-base';
import view_form from '@widgets/ibz-case/main-form/main-form.vue';

/**
 * 用例库用例编辑视图（新建）视图
 *
 * @export
 * @class IbzCaseNewEditView
 * @extends {IbzCaseNewEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseNewEditView extends IbzCaseNewEditViewBase {}
</script>
