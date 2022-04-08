<template src="./todo-base-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoBaseEditView9Base } from './todo-base-edit-view9-base';
import view_form from '@widgets/todo/dashboard-basic-form/dashboard-basic-form.vue';

/**
 * 待办事宜表编辑视图视图
 *
 * @export
 * @class TodoBaseEditView9
 * @extends {TodoBaseEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoBaseEditView9 extends TodoBaseEditView9Base {}
</script>
