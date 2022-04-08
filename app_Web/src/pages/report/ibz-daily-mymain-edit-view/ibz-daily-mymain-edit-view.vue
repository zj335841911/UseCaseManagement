<template src="./ibz-daily-mymain-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailyMymainEditViewBase } from './ibz-daily-mymain-edit-view-base';
import view_form from '@widgets/ibz-daily/main-info-form/main-info-form.vue';

/**
 * 日报编辑视图（主数据）视图
 *
 * @export
 * @class IbzDailyMymainEditView
 * @extends {IbzDailyMymainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailyMymainEditView extends IbzDailyMymainEditViewBase {}
</script>
