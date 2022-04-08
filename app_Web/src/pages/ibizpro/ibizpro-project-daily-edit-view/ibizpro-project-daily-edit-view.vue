<template src="./ibizpro-project-daily-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectDailyEditViewBase } from './ibizpro-project-daily-edit-view-base';
import view_form from '@widgets/ibizpro-project-daily/main-form/main-form.vue';

/**
 * 项目日报编辑视图视图
 *
 * @export
 * @class IbizproProjectDailyEditView
 * @extends {IbizproProjectDailyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectDailyEditView extends IbizproProjectDailyEditViewBase {}
</script>
