<template src="./ibz-plan-templet-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzPlanTempletEditViewBase } from './ibz-plan-templet-edit-view-base';
import view_form from '@widgets/ibz-plan-templet/main-form/main-form.vue';

/**
 * 产品计划模板编辑视图视图
 *
 * @export
 * @class IbzPlanTempletEditView
 * @extends {IbzPlanTempletEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzPlanTempletEditView extends IbzPlanTempletEditViewBase {}
</script>
