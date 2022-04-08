<template src="./bug-mpickup-view4.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMPickupView4Base } from './bug-mpickup-view4-base';
import view_pickupviewpanel from '@widgets/bug/mpickup-view4pickupviewpanel-pickupviewpanel/mpickup-view4pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联Bug视图
 *
 * @export
 * @class BugMPickupView4
 * @extends {BugMPickupView4Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class BugMPickupView4 extends BugMPickupView4Base {}
</script>
