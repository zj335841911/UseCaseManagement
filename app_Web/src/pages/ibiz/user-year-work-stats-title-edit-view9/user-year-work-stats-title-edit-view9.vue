<template src="./user-year-work-stats-title-edit-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { UserYearWorkStatsTitleEditView9Base } from './user-year-work-stats-title-edit-view9-base';
import view_form from '@widgets/user-year-work-stats/title-form-form/title-form-form.vue';

/**
 * 用户年度工作内容统计编辑视图（标题）视图
 *
 * @export
 * @class UserYearWorkStatsTitleEditView9
 * @extends {UserYearWorkStatsTitleEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class UserYearWorkStatsTitleEditView9 extends UserYearWorkStatsTitleEditView9Base { }
</script>
