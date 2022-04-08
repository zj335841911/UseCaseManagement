<template src="./module-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ModulePickupViewBase } from './module-pickup-view-base';
import view_pickupviewpanel from '@widgets/module/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 模块选择视图
 *
 * @export
 * @class ModulePickupView
 * @extends {ModulePickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class ModulePickupView extends ModulePickupViewBase {}
</script>
