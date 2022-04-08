<template src="./ibz-monthly-monthly-main-msg-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyMonthlyMainMsgEditViewBase } from './ibz-monthly-monthly-main-msg-edit-view-base';
import view_form from '@widgets/ibz-monthly/main-info-form/main-info-form.vue';

/**
 * 月报编辑视图视图
 *
 * @export
 * @class IbzMonthlyMonthlyMainMsgEditView
 * @extends {IbzMonthlyMonthlyMainMsgEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyMonthlyMainMsgEditView extends IbzMonthlyMonthlyMainMsgEditViewBase {}
</script>
