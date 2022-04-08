<template src="./product-story-kan-ban-kanban.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProductStoryKanBanKanbanBase } from './product-story-kan-ban-kanban-base';
import layout_itemlayoutpanel from '@widgets/story/product-story-kan-ban-panel/product-story-kan-ban-panel.vue';
 

/**
 * kanban部件
 *
 * @export
 * @class ProductStoryKanBanKanban
 * @extends {ProductStoryKanBanKanbanBase}
 */
@Component({
    components: {
        layout_itemlayoutpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class ProductStoryKanBanKanban extends ProductStoryKanBanKanbanBase {}
</script>
