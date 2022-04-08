<template src="./user-year-work-stats-info-edit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsInfoEditView9Base } from './user-year-work-stats-info-edit-view9-base';
import view_form from '@widgets/user-year-work-stats/main-info-form/main-info-form.vue';

/**
 * 用户年度工作内容统计编辑视图（基础信息）视图
 *
 * @export
 * @class UserYearWorkStatsInfoEditView9
 * @extends {UserYearWorkStatsInfoEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsInfoEditView9 extends UserYearWorkStatsInfoEditView9Base { }
</script>
