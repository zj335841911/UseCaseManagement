<template src="./story-project-mpickup-view3.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryProjectMPickupView3Base } from './story-project-mpickup-view3-base';
import view_pickupviewpanel from '@widgets/story/project-mpickup-view3pickupviewpanel-pickupviewpanel/project-mpickup-view3pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联需求视图
 *
 * @export
 * @class StoryProjectMPickupView3
 * @extends {StoryProjectMPickupView3Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryProjectMPickupView3 extends StoryProjectMPickupView3Base {}
</script>
