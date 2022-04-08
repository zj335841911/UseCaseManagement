<template src="./bug-grid-view9-task-related.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugGridView9_TaskRelatedBase } from './bug-grid-view9-task-related-base';
import view_grid from '@widgets/bug/task-related-grid/task-related-grid.vue';

/**
 * 相关Bug视图
 *
 * @export
 * @class BugGridView9_TaskRelated
 * @extends {BugGridView9_TaskRelatedBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class BugGridView9_TaskRelated extends BugGridView9_TaskRelatedBase {}
</script>
