<template src="./ibizpro-project-weekly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectWeeklyEditViewBase } from './ibizpro-project-weekly-edit-view-base';
import view_form from '@widgets/ibizpro-project-weekly/main-form/main-form.vue';

/**
 * 项目周报编辑视图视图
 *
 * @export
 * @class IbizproProjectWeeklyEditView
 * @extends {IbizproProjectWeeklyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectWeeklyEditView extends IbizproProjectWeeklyEditViewBase {}
</script>
