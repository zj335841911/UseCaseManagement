<template src="./todo-desc-edit-view9.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoDescEditView9Base } from './todo-desc-edit-view9-base';
import view_form from '@widgets/todo/dashboard-main-form/dashboard-main-form.vue';

/**
 * 待办事宜表编辑视图视图
 *
 * @export
 * @class TodoDescEditView9
 * @extends {TodoDescEditView9Base}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoDescEditView9 extends TodoDescEditView9Base {}
</script>
