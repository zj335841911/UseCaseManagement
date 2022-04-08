<template src="./bug-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugEditViewBase } from './bug-edit-view-base';
import view_form from '@widgets/bug/main-form/main-form.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugEditView
 * @extends {BugEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugEditView extends BugEditViewBase {}
</script>
