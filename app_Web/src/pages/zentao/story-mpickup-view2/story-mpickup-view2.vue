<template src="./story-mpickup-view2.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMPickupView2Base } from './story-mpickup-view2-base';
import view_pickupviewpanel from '@widgets/story/mpickup-view2pickupviewpanel-pickupviewpanel/mpickup-view2pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联需求视图
 *
 * @export
 * @class StoryMPickupView2
 * @extends {StoryMPickupView2Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMPickupView2 extends StoryMPickupView2Base {}
</script>
