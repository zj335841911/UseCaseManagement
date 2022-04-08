<template src="./ibz-reportly-create-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzReportlyCreateEditViewBase } from './ibz-reportly-create-edit-view-base';
import view_form from '@widgets/ibz-reportly/create-form/create-form.vue';

/**
 * 汇报编辑视图视图
 *
 * @export
 * @class IbzReportlyCreateEditView
 * @extends {IbzReportlyCreateEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzReportlyCreateEditView extends IbzReportlyCreateEditViewBase {}
</script>
