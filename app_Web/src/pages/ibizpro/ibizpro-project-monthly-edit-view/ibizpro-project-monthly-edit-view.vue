<template src="./ibizpro-project-monthly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProjectMonthlyEditViewBase } from './ibizpro-project-monthly-edit-view-base';
import view_form from '@widgets/ibizpro-project-monthly/main-form/main-form.vue';

/**
 * 项目月报编辑视图视图
 *
 * @export
 * @class IbizproProjectMonthlyEditView
 * @extends {IbizproProjectMonthlyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProjectMonthlyEditView extends IbizproProjectMonthlyEditViewBase {}
</script>
