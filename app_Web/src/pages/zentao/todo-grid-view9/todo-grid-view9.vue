<template src="./todo-grid-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoGridView9Base } from './todo-grid-view9-base';
import view_grid from '@widgets/todo/my-upcoming-grid/my-upcoming-grid.vue';

/**
 * 我的待办视图
 *
 * @export
 * @class TodoGridView9
 * @extends {TodoGridView9Base}
 */
@Component({
    components: {
        view_grid, 
    }
})
@VueLifeCycleProcessing()
export default class TodoGridView9 extends TodoGridView9Base {}
</script>
