<template src="./user-year-work-stats-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsEditViewBase } from './user-year-work-stats-edit-view-base';
import view_form from '@widgets/user-year-work-stats/basis-main-info-form/basis-main-info-form.vue';

/**
 * 用户年度工作内容统计编辑视图视图
 *
 * @export
 * @class UserYearWorkStatsEditView
 * @extends {UserYearWorkStatsEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsEditView extends UserYearWorkStatsEditViewBase {}
</script>
