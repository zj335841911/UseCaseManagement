<template src="./ibz-weekly-edit-view-main-myweekly.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyEditViewMainMyweeklyBase } from './ibz-weekly-edit-view-main-myweekly-base';
import view_form from '@widgets/ibzweekly/weekly-msg-form/weekly-msg-form.vue';

/**
 * 实体2编辑视图视图
 *
 * @export
 * @class IbzWeeklyEditViewMainMyweekly
 * @extends {IbzWeeklyEditViewMainMyweeklyBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyEditViewMainMyweekly extends IbzWeeklyEditViewMainMyweeklyBase {}
</script>
