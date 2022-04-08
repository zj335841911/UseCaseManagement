<template src="./ibizpro-product-daily-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproProductDailyEditViewBase } from './ibizpro-product-daily-edit-view-base';
import view_form from '@widgets/ibizpro-product-daily/main-info-form/main-info-form.vue';

/**
 * 产品日报编辑视图视图
 *
 * @export
 * @class IbizproProductDailyEditView
 * @extends {IbizproProductDailyEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproProductDailyEditView extends IbizproProductDailyEditViewBase {}
</script>
