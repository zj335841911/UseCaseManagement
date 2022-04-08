<template src="./bug-story-tobug-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugStoryTOBugEditViewBase } from './bug-story-tobug-edit-view-base';
import view_form from '@widgets/bug/story-to-bug-form/story-to-bug-form.vue';

/**
 * Bug视图
 *
 * @export
 * @class BugStoryTOBugEditView
 * @extends {BugStoryTOBugEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class BugStoryTOBugEditView extends BugStoryTOBugEditViewBase {}
</script>
