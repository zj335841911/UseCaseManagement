<template src="./bug-mpickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMPickupViewBase } from './bug-mpickup-view-base';
import view_pickupviewpanel from '@widgets/bug/mpickup-viewpickupviewpanel-pickupviewpanel/mpickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 关联Bug视图
 *
 * @export
 * @class BugMPickupView
 * @extends {BugMPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class BugMPickupView extends BugMPickupViewBase {}
</script>
