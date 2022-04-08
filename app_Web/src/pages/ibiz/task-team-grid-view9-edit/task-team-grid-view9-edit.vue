<template src="./task-team-grid-view9-edit.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskTeamGridView9_EditBase } from './task-team-grid-view9-edit-base';
import view_grid from '@widgets/ibztask-team/main-edit-grid/main-edit-grid.vue';

/**
 * 团队视图
 *
 * @export
 * @class TaskTeamGridView9_Edit
 * @extends {TaskTeamGridView9_EditBase}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TaskTeamGridView9_Edit extends TaskTeamGridView9_EditBase {}
</script>
