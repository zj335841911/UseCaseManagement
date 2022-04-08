<template src="./bug-todo-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTodoEditViewBase } from './bug-todo-edit-view-base';
import view_form from '@widgets/bug/pending-submission-form/pending-submission-form.vue';

/**
 * 待办提交视图
 *
 * @export
 * @class BugTodoEditView
 * @extends {BugTodoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugTodoEditView extends BugTodoEditViewBase {}
</script>
