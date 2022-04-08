<template src="./task-team-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTeamGridView9Base } from './task-team-grid-view9-base';
import view_grid from '@widgets/ibztask-team/main-edit-row-grid/main-edit-row-grid.vue';

/**
 * 团队视图
 *
 * @export
 * @class TaskTeamGridView9
 * @extends {TaskTeamGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTeamGridView9 extends TaskTeamGridView9Base {}
</script>
