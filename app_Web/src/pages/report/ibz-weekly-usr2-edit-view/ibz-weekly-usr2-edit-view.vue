<template src="./ibz-weekly-usr2-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyUsr2EditViewBase } from './ibz-weekly-usr2-edit-view-base';
import view_form from '@widgets/ibzweekly/weekly-msg-form/weekly-msg-form.vue';

/**
 * 周报编辑视图视图
 *
 * @export
 * @class IbzWeeklyUsr2EditView
 * @extends {IbzWeeklyUsr2EditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyUsr2EditView extends IbzWeeklyUsr2EditViewBase {}
</script>
