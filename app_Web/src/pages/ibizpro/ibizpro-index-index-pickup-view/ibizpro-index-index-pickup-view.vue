<template src="./ibizpro-index-index-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbizproIndexIndexPickupViewBase } from './ibizpro-index-index-pickup-view-base';
import view_pickupviewpanel from '@widgets/ibizpro-index/index-pickup-viewpickupviewpanel-pickupviewpanel/index-pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 索引检索数据选择视图视图
 *
 * @export
 * @class IbizproIndexIndexPickupView
 * @extends {IbizproIndexIndexPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class IbizproIndexIndexPickupView extends IbizproIndexIndexPickupViewBase {}
</script>
