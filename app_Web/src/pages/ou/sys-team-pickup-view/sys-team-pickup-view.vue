<template src="./sys-team-pickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { SysTeamPickupViewBase } from './sys-team-pickup-view-base';
import view_pickupviewpanel from '@widgets/sys-team/pickup-viewpickupviewpanel-pickupviewpanel/pickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 组数据选择视图视图
 *
 * @export
 * @class SysTeamPickupView
 * @extends {SysTeamPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class SysTeamPickupView extends SysTeamPickupViewBase {}
</script>
