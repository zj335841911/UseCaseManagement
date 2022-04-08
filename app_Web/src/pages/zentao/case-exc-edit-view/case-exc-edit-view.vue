<template src="./case-exc-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseExcEditViewBase } from './case-exc-edit-view-base';
import view_form from '@widgets/case/main-r-form/main-r-form.vue';

/**
 * 执行结果视图
 *
 * @export
 * @class CaseExcEditView
 * @extends {CaseExcEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseExcEditView extends CaseExcEditViewBase {}
</script>
