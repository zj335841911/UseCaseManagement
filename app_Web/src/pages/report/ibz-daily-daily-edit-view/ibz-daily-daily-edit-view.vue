<template src="./ibz-daily-daily-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyDailyEditViewBase } from './ibz-daily-daily-edit-view-base';
import view_form from '@widgets/ibz-daily/create-daily-edit-form-form/create-daily-edit-form-form.vue';

/**
 * 日报编辑视图视图
 *
 * @export
 * @class IbzDailyDailyEditView
 * @extends {IbzDailyDailyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyDailyEditView extends IbzDailyDailyEditViewBase {}
</script>
