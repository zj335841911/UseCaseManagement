<template src="./task-team-grid-view9-look.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTeamGridView9_LookBase } from './task-team-grid-view9-look-base';
import view_grid from '@widgets/task-team/main-grid/main-grid.vue';

/**
 * 团队视图
 *
 * @export
 * @class TaskTeamGridView9_Look
 * @extends {TaskTeamGridView9_LookBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTeamGridView9_Look extends TaskTeamGridView9_LookBase {}
</script>
