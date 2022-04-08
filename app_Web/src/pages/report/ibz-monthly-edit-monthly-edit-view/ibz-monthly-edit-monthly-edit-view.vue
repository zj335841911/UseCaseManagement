<template src="./ibz-monthly-edit-monthly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyEditMonthlyEditViewBase } from './ibz-monthly-edit-monthly-edit-view-base';
import view_form from '@widgets/ibz-monthly/new-form/new-form.vue';

/**
 * 月报编辑视图视图
 *
 * @export
 * @class IbzMonthlyEditMonthlyEditView
 * @extends {IbzMonthlyEditMonthlyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyEditMonthlyEditView extends IbzMonthlyEditMonthlyEditViewBase {}
</script>
