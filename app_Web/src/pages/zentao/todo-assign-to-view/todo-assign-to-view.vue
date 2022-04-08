<template src="./todo-assign-to-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoAssignToViewBase } from './todo-assign-to-view-base';
import view_form from '@widgets/todo/assignto-form-form/assignto-form-form.vue';

/**
 * 指派表单视图视图
 *
 * @export
 * @class TodoAssignToView
 * @extends {TodoAssignToViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoAssignToView extends TodoAssignToViewBase {}
</script>
