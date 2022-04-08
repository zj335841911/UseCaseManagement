<template src="./story-mpickup-view3.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMPickupView3Base } from './story-mpickup-view3-base';
import view_pickupviewpanel from '@widgets/story/mpickup-view3pickupviewpanel-pickupviewpanel/mpickup-view3pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联需求视图
 *
 * @export
 * @class StoryMPickupView3
 * @extends {StoryMPickupView3Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMPickupView3 extends StoryMPickupView3Base {}
</script>
