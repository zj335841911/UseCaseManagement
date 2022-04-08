<template src="./story-main-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainViewBase } from './story-main-view-base';
import view_dashboard from '@widgets/story/main-panel-dashboard/main-panel-dashboard.vue';

/**
 * 需求数据看板视图视图
 *
 * @export
 * @class StoryMainView
 * @extends {StoryMainViewBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView extends StoryMainViewBase {}
</script>
