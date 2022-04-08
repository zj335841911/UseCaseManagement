<template src="./ibz-reportly-my-received-reportly-detail-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyMyReceivedReportlyDetailEditViewBase } from './ibz-reportly-my-received-reportly-detail-edit-view-base';
import view_form from '@widgets/ibz-reportly/reportly-detail-form/reportly-detail-form.vue';

/**
 * 汇报编辑视图视图
 *
 * @export
 * @class IbzReportlyMyReceivedReportlyDetailEditView
 * @extends {IbzReportlyMyReceivedReportlyDetailEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyMyReceivedReportlyDetailEditView extends IbzReportlyMyReceivedReportlyDetailEditViewBase {}
</script>
