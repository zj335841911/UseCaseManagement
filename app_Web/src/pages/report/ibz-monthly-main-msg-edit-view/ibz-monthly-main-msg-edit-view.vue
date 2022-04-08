<template src="./ibz-monthly-main-msg-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMonthlyMainMsgEditViewBase } from './ibz-monthly-main-msg-edit-view-base';
import view_form from '@widgets/ibz-monthly/main-msg-form/main-msg-form.vue';

/**
 * 月报编辑视图视图
 *
 * @export
 * @class IbzMonthlyMainMsgEditView
 * @extends {IbzMonthlyMainMsgEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMonthlyMainMsgEditView extends IbzMonthlyMainMsgEditViewBase {}
</script>
