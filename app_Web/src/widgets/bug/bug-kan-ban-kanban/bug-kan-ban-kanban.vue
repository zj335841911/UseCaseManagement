<template src="./bug-kan-ban-kanban.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugKanBanKanbanBase } from './bug-kan-ban-kanban-base';
import layout_itemlayoutpanel from '@widgets/bug/bug-kan-ban-panel/bug-kan-ban-panel.vue';
 

/**
 * kanban部件
 *
 * @export
 * @class BugKanBanKanban
 * @extends {BugKanBanKanbanBase}
 */
@Component({
    components: {
        layout_itemlayoutpanel,
         
    },
})
@VueLifeCycleProcessing()
export default class BugKanBanKanban extends BugKanBanKanbanBase {}
</script>
