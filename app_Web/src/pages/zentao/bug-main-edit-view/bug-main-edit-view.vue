<template src="./bug-main-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMainEditViewBase } from './bug-main-edit-view-base';
import view_form from '@widgets/bug/dashboard-main-edit-form/dashboard-main-edit-form.vue';

/**
 * Bug编辑视图
 *
 * @export
 * @class BugMainEditView
 * @extends {BugMainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugMainEditView extends BugMainEditViewBase {}
</script>
