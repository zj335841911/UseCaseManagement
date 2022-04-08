<template src="./ibz-case-edit-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzCaseEditEditViewBase } from './ibz-case-edit-edit-view-base';
import view_form from '@widgets/ibz-case/info-edit-form/info-edit-form.vue';

/**
 * 用例库用例编辑视图（编辑）视图
 *
 * @export
 * @class IbzCaseEditEditView
 * @extends {IbzCaseEditEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzCaseEditEditView extends IbzCaseEditEditViewBase {}
</script>
