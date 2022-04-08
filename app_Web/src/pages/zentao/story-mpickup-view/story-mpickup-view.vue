<template src="./story-mpickup-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMPickupViewBase } from './story-mpickup-view-base';
import view_pickupviewpanel from '@widgets/story/mpickup-viewpickupviewpanel-pickupviewpanel/mpickup-viewpickupviewpanel-pickupviewpanel.vue';

/**
 * 关联需求视图
 *
 * @export
 * @class StoryMPickupView
 * @extends {StoryMPickupViewBase}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMPickupView extends StoryMPickupViewBase {}
</script>
