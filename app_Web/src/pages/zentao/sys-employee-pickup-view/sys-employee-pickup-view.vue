<template src="./sys-employee-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysEmployeePickupViewBase } from './sys-employee-pickup-view-base';
import view_pickupviewpanel from '@widgets/sys-employee/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 人员数据选择视图视图
 *
 * @export
 * @class SysEmployeePickupView
 * @extends {SysEmployeePickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class SysEmployeePickupView extends SysEmployeePickupViewBase {}
</script>
