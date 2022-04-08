<template src="./ibz-reportly-reportly-detail-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyReportlyDetailEditViewBase } from './ibz-reportly-reportly-detail-edit-view-base';
import view_form from '@widgets/ibz-reportly/reportly-detail-form/reportly-detail-form.vue';

/**
 * 汇报编辑视图视图
 *
 * @export
 * @class IbzReportlyReportlyDetailEditView
 * @extends {IbzReportlyReportlyDetailEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyReportlyDetailEditView extends IbzReportlyReportlyDetailEditViewBase {}
</script>
