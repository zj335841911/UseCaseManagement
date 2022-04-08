<template src="./todo-todo-create-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoTodoCreateViewBase } from './todo-todo-create-view-base';
import view_form from '@widgets/todo/main-form/main-form.vue';

/**
 * 添加待办视图
 *
 * @export
 * @class TodoTodoCreateView
 * @extends {TodoTodoCreateViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoTodoCreateView extends TodoTodoCreateViewBase {}
</script>
