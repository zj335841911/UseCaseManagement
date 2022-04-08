<template src="./story-kanban-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryKanbanViewBase } from './story-kanban-view-base';
import view_kanban from '@widgets/story/story-kan-ban-kanban/story-kan-ban-kanban.vue';

/**
 * 需求看板视图视图
 *
 * @export
 * @class StoryKanbanView
 * @extends {StoryKanbanViewBase}
 */
@Component({
    components: {
        view_kanban, 
    }
})
@VueLifeCycleProcessing()
export default class StoryKanbanView extends StoryKanbanViewBase {}
</script>
