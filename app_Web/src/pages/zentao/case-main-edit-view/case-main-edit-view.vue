<template src="./case-main-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseMainEditViewBase } from './case-main-edit-view-base';
import view_form from '@widgets/case/main-edit-form/main-edit-form.vue';

/**
 * 测试用例视图
 *
 * @export
 * @class CaseMainEditView
 * @extends {CaseMainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseMainEditView extends CaseMainEditViewBase {}
</script>
