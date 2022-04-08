<template src="./todo-finish-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoFinishViewBase } from './todo-finish-view-base';
import view_form from '@widgets/todo/finish-from-form/finish-from-form.vue';

/**
 * 完成视图
 *
 * @export
 * @class TodoFinishView
 * @extends {TodoFinishViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoFinishView extends TodoFinishViewBase {}
</script>
