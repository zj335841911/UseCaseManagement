<template src="./todo-activite-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoActiviteViewBase } from './todo-activite-view-base';
import view_form from '@widgets/todo/activite-from-form/activite-from-form.vue';

/**
 * 激活视图
 *
 * @export
 * @class TodoActiviteView
 * @extends {TodoActiviteViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoActiviteView extends TodoActiviteViewBase {}
</script>
