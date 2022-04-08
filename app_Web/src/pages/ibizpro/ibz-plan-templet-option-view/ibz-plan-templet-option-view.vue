<template src="./ibz-plan-templet-option-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzPlanTempletOptionViewBase } from './ibz-plan-templet-option-view-base';
import view_form from '@widgets/ibz-plan-templet/main-form/main-form.vue';

/**
 * 产品计划模板选项操作视图视图
 *
 * @export
 * @class IbzPlanTempletOptionView
 * @extends {IbzPlanTempletOptionViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzPlanTempletOptionView extends IbzPlanTempletOptionViewBase {}
</script>
