<template src="./story-tab-exp-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryTabExpViewBase } from './story-tab-exp-view-base';
import view_tabexppanel from '@widgets/story/tab-exp-viewtabexppanel-tabexppanel/tab-exp-viewtabexppanel-tabexppanel.vue';

/**
 * 需求分页导航视图视图
 *
 * @export
 * @class StoryTabExpView
 * @extends {StoryTabExpViewBase}
 */
@Component({
    components: {
        view_tabexppanel, 
    }
})
@VueLifeCycleProcessing()
export default class StoryTabExpView extends StoryTabExpViewBase {}
</script>
