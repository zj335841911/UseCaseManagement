<template src="./branch-pickup-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BranchPickupViewBase } from './branch-pickup-view-base';
import view_pickupviewpanel from '@widgets/branch/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 平台数据选择视图视图
 *
 * @export
 * @class BranchPickupView
 * @extends {BranchPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class BranchPickupView extends BranchPickupViewBase { }
</script>
