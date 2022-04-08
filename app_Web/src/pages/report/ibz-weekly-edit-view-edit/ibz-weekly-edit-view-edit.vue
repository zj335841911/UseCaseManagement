<template src="./ibz-weekly-edit-view-edit.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzWeeklyEditViewEditBase } from './ibz-weekly-edit-view-edit-base';
import view_form from '@widgets/ibzweekly/main-form/main-form.vue';

/**
 * 实体2编辑视图视图
 *
 * @export
 * @class IbzWeeklyEditViewEdit
 * @extends {IbzWeeklyEditViewEditBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzWeeklyEditViewEdit extends IbzWeeklyEditViewEditBase {}
</script>
