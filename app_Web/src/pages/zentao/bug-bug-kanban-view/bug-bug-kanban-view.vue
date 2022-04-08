<template src="./bug-bug-kanban-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugBugKanbanViewBase } from './bug-bug-kanban-view-base';
import view_kanban from '@widgets/bug/bug-kan-ban-kanban/bug-kan-ban-kanban.vue';

/**
 * Bug看板视图视图
 *
 * @export
 * @class BugBugKanbanView
 * @extends {BugBugKanbanViewBase}
 */
@Component({
    components: {
        view_kanban, 
    }
})
@VueLifeCycleProcessing()
export default class BugBugKanbanView extends BugBugKanbanViewBase {}
</script>
