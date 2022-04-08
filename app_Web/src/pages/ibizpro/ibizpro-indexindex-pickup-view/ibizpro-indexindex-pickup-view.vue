<template src="./ibizpro-indexindex-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZPRO_INDEXIndexPickupViewBase } from './ibizpro-indexindex-pickup-view-base';
import view_pickupviewpanel from '@widgets/ibizpro-index/index-pickup-viewpickupviewpanel-pickupviewpanel/index-pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 索引检索数据选择视图视图
 *
 * @export
 * @class IBIZPRO_INDEXIndexPickupView
 * @extends {IBIZPRO_INDEXIndexPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZPRO_INDEXIndexPickupView extends IBIZPRO_INDEXIndexPickupViewBase {}
</script>
