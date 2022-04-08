<template src="./todo-close-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoCloseViewBase } from './todo-close-view-base';
import view_form from '@widgets/todo/close-form-form/close-form-form.vue';

/**
 * 关闭视图
 *
 * @export
 * @class TodoCloseView
 * @extends {TodoCloseViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoCloseView extends TodoCloseViewBase {}
</script>
