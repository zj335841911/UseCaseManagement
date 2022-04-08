<template src="./ibz-daily-daily-info-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyDailyInfoEditViewBase } from './ibz-daily-daily-info-edit-view-base';
import view_form from '@widgets/ibz-daily/main-info-form/main-info-form.vue';

/**
 * 日报编辑视图(日报描述)视图
 *
 * @export
 * @class IbzDailyDailyInfoEditView
 * @extends {IbzDailyDailyInfoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyDailyInfoEditView extends IbzDailyDailyInfoEditViewBase {}
</script>
