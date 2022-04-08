<template src="./ibz-monthly-my-received-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyMyReceivedEditViewBase } from './ibz-monthly-my-received-edit-view-base';
import view_form from '@widgets/ibz-monthly/main-info-form/main-info-form.vue';

/**
 * 月报编辑视图视图
 *
 * @export
 * @class IbzMonthlyMyReceivedEditView
 * @extends {IbzMonthlyMyReceivedEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyMyReceivedEditView extends IbzMonthlyMyReceivedEditViewBase {}
</script>
