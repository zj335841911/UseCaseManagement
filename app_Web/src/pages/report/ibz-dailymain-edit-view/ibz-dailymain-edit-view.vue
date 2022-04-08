<template src="./ibz-dailymain-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailymainEditViewBase } from './ibz-dailymain-edit-view-base';
import view_form from '@widgets/ibz-daily/edit-daily-edit-form-form/edit-daily-edit-form-form.vue';

/**
 * 日报编辑视图（编辑）视图
 *
 * @export
 * @class IbzDailymainEditView
 * @extends {IbzDailymainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailymainEditView extends IbzDailymainEditViewBase {}
</script>
