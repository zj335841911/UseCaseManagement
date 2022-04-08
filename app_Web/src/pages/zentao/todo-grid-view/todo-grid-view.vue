<template src="./todo-grid-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoGridViewBase } from './todo-grid-view-base';
import view_grid from '@widgets/todo/main-grid/main-grid.vue';
import view_searchbar from '@widgets/todo/custom-searchbar/custom-searchbar.vue';

/**
 * 待办事宜表格视图视图
 *
 * @export
 * @class TodoGridView
 * @extends {TodoGridViewBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchbar, 
    }
})
@VueLifeCycleProcessing()
export default class TodoGridView extends TodoGridViewBase {}
</script>
