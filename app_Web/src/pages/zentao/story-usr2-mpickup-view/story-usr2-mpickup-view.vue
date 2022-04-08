<template src="./story-usr2-mpickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryUsr2MPickupViewBase } from './story-usr2-mpickup-view-base';
import view_pickupviewpanel from '@widgets/story/usr2-mpickup-viewpickupviewpanel-pickupviewpanel/usr2-mpickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 发布下属需求数据多项选择视图视图
 *
 * @export
 * @class StoryUsr2MPickupView
 * @extends {StoryUsr2MPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryUsr2MPickupView extends StoryUsr2MPickupViewBase {}
</script>
