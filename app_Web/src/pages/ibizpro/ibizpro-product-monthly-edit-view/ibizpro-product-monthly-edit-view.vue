<template src="./ibizpro-product-monthly-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductMonthlyEditViewBase } from './ibizpro-product-monthly-edit-view-base';
import view_form from '@widgets/ibizpro-product-monthly/main-info-form/main-info-form.vue';

/**
 * 产品月报编辑视图视图
 *
 * @export
 * @class IbizproProductMonthlyEditView
 * @extends {IbizproProductMonthlyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductMonthlyEditView extends IbizproProductMonthlyEditViewBase {}
</script>
