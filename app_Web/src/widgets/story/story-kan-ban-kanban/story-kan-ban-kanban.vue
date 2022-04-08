<template src="./story-kan-ban-kanban.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { StoryKanBanKanbanBase } from './story-kan-ban-kanban-base';
import layout_itemlayoutpanel from '@widgets/story/story-kan-ban-panel/story-kan-ban-panel.vue';
 

/**
 * kanban部件
 *
 * @export
 * @class StoryKanBanKanban
 * @extends {StoryKanBanKanbanBase}
 */
@Component({
    components: {
        layout_itemlayoutpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class StoryKanBanKanban extends StoryKanBanKanbanBase {}
</script>
