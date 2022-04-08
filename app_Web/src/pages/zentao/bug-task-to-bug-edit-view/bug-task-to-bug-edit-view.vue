<template src="./bug-task-to-bug-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugTaskToBugEditViewBase } from './bug-task-to-bug-edit-view-base';
import view_form from '@widgets/bug/task-to-bug-form/task-to-bug-form.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugTaskToBugEditView
 * @extends {BugTaskToBugEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugTaskToBugEditView extends BugTaskToBugEditViewBase {}
</script>
