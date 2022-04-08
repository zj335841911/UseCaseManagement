<template src="./ibizpro-product-weekly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductWeeklyEditViewBase } from './ibizpro-product-weekly-edit-view-base';
import view_form from '@widgets/ibizpro-product-weekly/main-form/main-form.vue';

/**
 * 产品周报编辑视图视图
 *
 * @export
 * @class IbizproProductWeeklyEditView
 * @extends {IbizproProductWeeklyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductWeeklyEditView extends IbizproProductWeeklyEditViewBase {}
</script>
