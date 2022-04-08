<template src="./story-main-view-link.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryMainView_LinkBase } from './story-main-view-link-base';
import view_dashboard from '@widgets/story/main-panel-dashboard/main-panel-dashboard.vue';

/**
 * 需求数据看板视图视图
 *
 * @export
 * @class StoryMainView_Link
 * @extends {StoryMainView_LinkBase}
 */
@Component({
    components: {
        view_dashboard, 
    }
})
@VueLifeCycleProcessing()
export default class StoryMainView_Link extends StoryMainView_LinkBase { }
</script>
