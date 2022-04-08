<template src="./bug-mpickup-view5.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMPickupView5Base } from './bug-mpickup-view5-base';
import view_pickupviewpanel from '@widgets/bug/mpickup-view5pickupviewpanel-pickupviewpanel/mpickup-view5pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联Bug视图
 *
 * @export
 * @class BugMPickupView5
 * @extends {BugMPickupView5Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class BugMPickupView5 extends BugMPickupView5Base {}
</script>
