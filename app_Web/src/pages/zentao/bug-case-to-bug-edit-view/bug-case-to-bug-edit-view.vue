<template src="./bug-case-to-bug-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugCaseToBugEditViewBase } from './bug-case-to-bug-edit-view-base';
import view_form from '@widgets/bug/case-to-bug-form/case-to-bug-form.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugCaseToBugEditView
 * @extends {BugCaseToBugEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugCaseToBugEditView extends BugCaseToBugEditViewBase {}
</script>
