<template src="./dept-pickup-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DeptPickupViewBase } from './dept-pickup-view-base';
import view_pickupviewpanel from '@widgets/dept/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 部门数据选择视图视图
 *
 * @export
 * @class DeptPickupView
 * @extends {DeptPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class DeptPickupView extends DeptPickupViewBase { }
</script>
