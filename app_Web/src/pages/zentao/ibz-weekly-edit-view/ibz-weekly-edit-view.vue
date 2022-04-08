<template src="./ibz-weekly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyEditViewBase } from './ibz-weekly-edit-view-base';
import view_form from '@widgets/ibzweekly/main-form/main-form.vue';

/**
 * 实体2编辑视图视图
 *
 * @export
 * @class IbzWeeklyEditView
 * @extends {IbzWeeklyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyEditView extends IbzWeeklyEditViewBase {}
</script>
