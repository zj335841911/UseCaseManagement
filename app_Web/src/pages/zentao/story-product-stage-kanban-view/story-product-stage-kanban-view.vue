<template src="./story-product-stage-kanban-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryProductStageKanbanViewBase } from './story-product-stage-kanban-view-base';
import view_kanban from '@widgets/story/product-story-kan-ban-kanban/product-story-kan-ban-kanban.vue';

/**
 * 需求看板视图视图
 *
 * @export
 * @class StoryProductStageKanbanView
 * @extends {StoryProductStageKanbanViewBase}
 */
@Component({
    components: {
        view_kanban, 
    }
})
@VueLifeCycleProcessing()
export default class StoryProductStageKanbanView extends StoryProductStageKanbanViewBase {}
</script>
