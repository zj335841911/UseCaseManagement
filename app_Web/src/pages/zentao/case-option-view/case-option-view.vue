<template src="./case-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseOptionViewBase } from './case-option-view-base';
import view_form from '@widgets/case/main-carry-form/main-carry-form.vue';

/**
 * 执行视图
 *
 * @export
 * @class CaseOptionView
 * @extends {CaseOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class CaseOptionView extends CaseOptionViewBase {}
</script>
